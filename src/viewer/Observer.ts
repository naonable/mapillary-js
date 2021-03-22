import {
    combineLatest as observableCombineLatest,
    empty as observableEmpty,
    merge as observableMerge,
    Observable,
    Subject,
} from "rxjs";

import {
    auditTime,
    distinctUntilChanged,
    first,
    map,
    switchMap,
    withLatestFrom,
} from "rxjs/operators";

import { Container } from "./Container";
import { Navigator } from "./Navigator";
import { Projection } from "./Projection";
import { Unprojection } from "./interfaces/Unprojection";
import { ViewerMouseEvent } from "./events/ViewerMouseEvent";

import { LatLon } from "../api/interfaces/LatLon";
import { Transform } from "../geo/Transform";
import { LatLonAlt } from "../api/interfaces/LatLonAlt";
import { Node } from "../graph/Node";
import { NavigationEdgeStatus } from "../graph/interfaces/NavigationEdgeStatus";
import { RenderCamera } from "../render/RenderCamera";
import { SubscriptionHolder } from "../utils/SubscriptionHolder";
import { ViewerEvent } from "./events/ViewerEvent";
import {
    ViewerBearingEvent,
    ViewerLoadingEvent,
    ViewerNavigableEvent,
    ViewerNavigationEdgeStatusEvent,
    ViewerNodeEvent,
    ViewerStateEvent,
} from "./events/ViewerStateEvent";
import { IViewer } from "./interfaces/IViewer";

type UnprojectionParams = [
    [
        ViewerMouseEvent['type'],
        MouseEvent,
    ],
    RenderCamera,
    LatLonAlt,
    Transform,
]

export class Observer {
    private _started: boolean;

    private _navigable$: Subject<boolean>;

    private _subscriptions: SubscriptionHolder =
        new SubscriptionHolder();
    private _emitSubscriptions: SubscriptionHolder =
        new SubscriptionHolder();

    private _container: Container;
    private _viewer: IViewer;
    private _navigator: Navigator;
    private _projection: Projection;

    constructor(
        viewer: IViewer,
        navigator: Navigator,
        container: Container) {
        this._container = container;
        this._viewer = viewer;
        this._navigator = navigator;
        this._projection = new Projection();

        this._started = false;

        this._navigable$ = new Subject<boolean>();

        const subs = this._subscriptions;

        // navigable and loading should always emit,
        // also when cover is activated.
        subs.push(this._navigable$
            .subscribe(
                (navigable: boolean): void => {
                    const type: ViewerEvent = "navigable";
                    const event: ViewerNavigableEvent = {
                        navigable,
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));

        subs.push(this._navigator.loadingService.loading$
            .subscribe(
                (loading: boolean): void => {
                    const type: ViewerEvent = "loading";
                    const event: ViewerLoadingEvent = {
                        loading,
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));
    }

    public get started(): boolean {
        return this._started;
    }

    public get navigable$(): Subject<boolean> {
        return this._navigable$;
    }

    public get projection(): Projection {
        return this._projection;
    }

    public dispose(): void {
        this.stopEmit();
        this._subscriptions.unsubscribe();
    }

    public project$(
        latLon: LatLon)
        : Observable<number[]> {
        return observableCombineLatest(
            this._container.renderService.renderCamera$,
            this._navigator.stateService.currentNode$,
            this._navigator.stateService.reference$).pipe(
                first(),
                map(
                    ([render, node, reference]: [RenderCamera, Node, LatLonAlt]): number[] => {
                        if (this._projection.distanceBetweenLatLons(latLon, node.latLon) > 1000) {
                            return null;
                        }

                        const canvasPoint: number[] = this._projection.latLonToCanvas(
                            latLon,
                            this._container.container,
                            render,
                            reference);

                        return !!canvasPoint ?
                            [Math.round(canvasPoint[0]), Math.round(canvasPoint[1])] :
                            null;
                    }));
    }

    public projectBasic$(
        basicPoint: number[])
        : Observable<number[]> {
        return observableCombineLatest(
            this._container.renderService.renderCamera$,
            this._navigator.stateService.currentTransform$).pipe(
                first(),
                map(
                    ([render, transform]: [RenderCamera, Transform]): number[] => {
                        const canvasPoint: number[] = this._projection.basicToCanvas(
                            basicPoint,
                            this._container.container,
                            render,
                            transform);

                        return !!canvasPoint ?
                            [Math.round(canvasPoint[0]), Math.round(canvasPoint[1])] :
                            null;
                    }));
    }

    public startEmit(): void {
        if (this._started) { return; }

        this._started = true;
        const subs = this._emitSubscriptions;

        subs.push(this._navigator.stateService.currentNodeExternal$
            .subscribe((node: Node): void => {
                const type: ViewerEvent = "node";
                const event: ViewerNodeEvent = {
                    node,
                    target: this._viewer,
                    type,
                }
                this._viewer.fire(type, event);
            }));

        subs.push(this._navigator.stateService.currentNodeExternal$.pipe(
            switchMap(
                (node: Node): Observable<NavigationEdgeStatus> => {
                    return node.sequenceEdges$;
                }))
            .subscribe(
                (status: NavigationEdgeStatus): void => {
                    const type: ViewerEvent = "sequenceedges";
                    const event: ViewerNavigationEdgeStatusEvent = {
                        status,
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));

        subs.push(this._navigator.stateService.currentNodeExternal$.pipe(
            switchMap(
                (node: Node): Observable<NavigationEdgeStatus> => {
                    return node.spatialEdges$;
                }))
            .subscribe(
                (status: NavigationEdgeStatus): void => {
                    const type: ViewerEvent = "spatialedges";
                    const event: ViewerNavigationEdgeStatusEvent = {
                        status,
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));

        subs.push(observableCombineLatest(
            this._navigator.stateService.inMotion$,
            this._container.mouseService.active$,
            this._container.touchService.active$).pipe(
                map(
                    (values: boolean[]): boolean => {
                        return values[0] || values[1] || values[2];
                    }),
                distinctUntilChanged())
            .subscribe(
                (started: boolean) => {
                    const type: ViewerEvent = started ? "movestart" : "moveend";
                    const event: ViewerStateEvent = {
                        target: this._viewer,
                        type,
                    };
                    this._viewer.fire(type, event);
                }));

        subs.push(this._container.renderService.bearing$.pipe(
            auditTime(100),
            distinctUntilChanged(
                (b1: number, b2: number): boolean => {
                    return Math.abs(b2 - b1) < 1;
                }))
            .subscribe(
                (bearing): void => {
                    const type: ViewerEvent = "bearing";
                    const event: ViewerBearingEvent = {
                        bearing,
                        target: this._viewer,
                        type,
                    };
                    this._viewer.fire(type, event);
                }));

        const mouseMove$ = this._container.mouseService.active$.pipe(
            switchMap(
                (active: boolean): Observable<MouseEvent> => {
                    return active ?
                        observableEmpty() :
                        this._container.mouseService.mouseMove$;
                }));

        subs.push(observableMerge(
            this._mapMouseEvent$(
                "click",
                this._container.mouseService.staticClick$),
            this._mapMouseEvent$(
                "contextmenu",
                this._container.mouseService.contextMenu$),
            this._mapMouseEvent$(
                "dblclick",
                this._container.mouseService.dblClick$),
            this._mapMouseEvent$(
                "mousedown",
                this._container.mouseService.mouseDown$),
            this._mapMouseEvent$(
                "mousemove",
                mouseMove$),
            this._mapMouseEvent$(
                "mouseout",
                this._container.mouseService.mouseOut$),
            this._mapMouseEvent$(
                "mouseover",
                this._container.mouseService.mouseOver$),
            this._mapMouseEvent$(
                "mouseup",
                this._container.mouseService.mouseUp$))
            .pipe(
                withLatestFrom(
                    this._container.renderService.renderCamera$,
                    this._navigator.stateService.reference$,
                    this._navigator.stateService.currentTransform$),
                map(
                    ([[type, event], render, reference, transform]
                        : UnprojectionParams)
                        : ViewerMouseEvent => {
                        const unprojection: Unprojection =
                            this._projection.eventToUnprojection(
                                event,
                                this._container.container,
                                render,
                                reference,
                                transform);

                        return {
                            basicPoint: unprojection.basicPoint,
                            latLon: unprojection.latLon,
                            originalEvent: event,
                            pixelPoint: unprojection.pixelPoint,
                            target: this._viewer,
                            type: type,
                        };
                    }))
            .subscribe(
                (event: ViewerMouseEvent): void => {
                    this._viewer.fire(event.type, event);
                }));

        subs.push(this._container.renderService.renderCamera$.pipe(
            distinctUntilChanged(
                ([x1, y1], [x2, y2]): boolean => {
                    return this._closeTo(x1, x2, 1e-2) &&
                        this._closeTo(y1, y2, 1e-2);
                },
                (rc: RenderCamera): number[] => {
                    return rc.camera.position.toArray();
                }))
            .subscribe(
                (): void => {
                    const type: ViewerEvent = "position";
                    const event: ViewerStateEvent = {
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));

        subs.push(this._container.renderService.renderCamera$.pipe(
            distinctUntilChanged(
                ([phi1, theta1], [phi2, theta2]): boolean => {
                    return this._closeTo(phi1, phi2, 1e-3) &&
                        this._closeTo(theta1, theta2, 1e-3);
                },
                (rc: RenderCamera): [number, number] => {
                    return [rc.rotation.phi, rc.rotation.theta];
                }))
            .subscribe(
                (): void => {
                    const type: ViewerEvent = "pov";
                    const event: ViewerStateEvent = {
                        target: this._viewer,
                        type,
                    }
                    this._viewer.fire(type, event);
                }));

        subs.push(this._container.renderService.renderCamera$.pipe(
            distinctUntilChanged(
                (fov1, fov2): boolean => {
                    return this._closeTo(fov1, fov2, 1e-2);
                },
                (rc: RenderCamera): number => {
                    return rc.perspective.fov;
                }))
            .subscribe(
                (): void => {
                    const type: ViewerEvent = "fov";
                    const event: ViewerStateEvent = {
                        target: this._viewer,
                        type,
                    };
                    this._viewer.fire(type, event);
                }));
    }

    public stopEmit(): void {
        if (!this.started) { return; }

        this._emitSubscriptions.unsubscribe();
        this._started = false;
    }

    public unproject$(canvasPoint: number[]): Observable<LatLon> {
        return observableCombineLatest(
            this._container.renderService.renderCamera$,
            this._navigator.stateService.reference$,
            this._navigator.stateService.currentTransform$).pipe(
                first(),
                map(
                    ([render, reference, transform]: [RenderCamera, LatLonAlt, Transform]): LatLon => {
                        const unprojection: Unprojection =
                            this._projection.canvasToUnprojection(
                                canvasPoint,
                                this._container.container,
                                render,
                                reference,
                                transform);

                        return unprojection.latLon;
                    }));
    }

    public unprojectBasic$(canvasPoint: number[]): Observable<number[]> {
        return observableCombineLatest(
            this._container.renderService.renderCamera$,
            this._navigator.stateService.currentTransform$).pipe(
                first(),
                map(
                    ([render, transform]: [RenderCamera, Transform]): number[] => {
                        return this._projection.canvasToBasic(
                            canvasPoint,
                            this._container.container,
                            render,
                            transform);
                    }));
    }

    private _closeTo(
        v1: number,
        v2: number,
        absoluteTolerance: number)
        : boolean {
        return Math.abs(v1 - v2) <= absoluteTolerance;
    }

    private _mapMouseEvent$(
        type: ViewerEvent,
        mouseEvent$: Observable<MouseEvent>)
        : Observable<[ViewerEvent, MouseEvent]> {
        return mouseEvent$.pipe(
            map(
                (event: MouseEvent): [ViewerEvent, MouseEvent] => {
                    return [type, event];
                }));
    }
}
