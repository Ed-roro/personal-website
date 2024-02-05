import {Interpolation, Theme} from "@emotion/react";
import {mq} from "../../Theme/MediaQueries";

export const MainGridCSS: Interpolation<Theme> = {
    gridRow: 2,
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    [mq.lg]: {
        maxWidth: 1080,
    },
}