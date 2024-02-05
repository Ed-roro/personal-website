﻿import {Interpolation, Theme} from "@emotion/react";
import {mq} from "../../Theme/MediaQueries";

export const CardSectionGrid: Interpolation<Theme> = {
    gridRow: 3,
    background: "#1E1C1C",
    margin: "auto",
    position: "relative",
    width: "100%",
    [mq.lg]: {
        maxWidth: 1080,
    },
};

export const BoxContainer: Interpolation<Theme> = {
    background: "#3E3746",
    padding: 50,
    boxSizing: "border-box",
};