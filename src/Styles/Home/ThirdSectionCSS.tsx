import {Interpolation, Theme} from "@emotion/react";
import {mq} from "../../Theme/MediaQueries";

export const MainGrid: Interpolation<Theme> = {
    gridRow: 3,
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    [mq.lg]: {
        maxWidth: 1080,
    },
}