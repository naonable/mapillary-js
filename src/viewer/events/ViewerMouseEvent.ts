import { LatLon } from "../../api/interfaces/LatLon";
import { IViewer } from "../interfaces/IViewer";

/**
 * @interface ViewerMouseEvent
 *
 * `ViewerMouseEvent` is the event type for mouse-related
 * viewer events.
 *
 * @example
 * // The `click` event is an example of a `ViewerMouseEvent`.
 * // Set up an event listener on the viewer.
 * viewer.on('click', function(e) {
 *   // The event object (e) contains information like the
 *   // coordinates of the point in the viewer that was clicked.
 *   console.log('A click event has occurred at ' + e.latLon);
 * });
 */
export interface ViewerMouseEvent {
    /**
     * The basic coordinates in the current image of the mouse
     * event target.
     *
     * @description In some situations mouse events can occur outside of
     * the border of a image. In that case the basic coordinates will be
     * `null`.
     *
     * Basic coordinates are 2D coordinates on the [0, 1] interval
     * and has the origin point, (0, 0), at the top left corner and the
     * maximum value, (1, 1), at the bottom right corner of the original
     * image.
     */
    basicPoint: number[];

    /**
     * The geographic location in the viewer of the mouse event target.
     *
     * @description In some situations the viewer can not determine a valid
     * geographic location for the mouse event target. In that case the
     * geographic coordinates will be `null`.
     */
    latLon: LatLon;

    /**
     * The pixel coordinates of the mouse event target, relative to
     * the viewer and measured from the top left corner.
     */
    pixelPoint: number[];

    /**
     * The original event that triggered the viewer event.
     */
    originalEvent: MouseEvent;

    /**
     * The viewer object that fired the event.
     */
    target: IViewer;

    /**
     * The event type.
     */
    type:
    | "click"
    | "dblclick"
    | "contextmenu"
    | "mousedown"
    | "mousemove"
    | "mouseout"
    | "mouseover"
    | "mouseup";
}
