import {Interpolation, Theme} from "@emotion/react";

export const TopSectionGrid: Interpolation<Theme> = {
    gridRow: 1,
    margin: "auto",
    alignContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    width: "100vw",
    height: "100vh", // Set the height of SectionFlex to 100vh
};

export const OverlayCSS: Interpolation<Theme> = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)"
};

export const TimelapseCSS: Interpolation<Theme> = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

export const TitleCSS: Interpolation<Theme> = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export const TitleHeaderCSS: Interpolation<Theme> = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "32px",
    overflowWrap: "break-word",
    color: "white"
};