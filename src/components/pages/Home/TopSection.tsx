import {
  SectionFlex,
  SectionContainer,
  SectionP
} from "components/molecules/body"
import { Interpolation, Theme } from '@emotion/react'
import { mq } from "Theme/MediaQueries"

const MainGrid: Interpolation<Theme> = {
  gridRow: 1,
  margin: "auto",
  alignContent: "space-evenly",
  alignItems: "center",
  position: "relative",
  width: "100vw",
  height: "100vh", // Set the height of SectionFlex to 100vh
  [mq.lg]: {
    //maxWidth: 1080,
  },
};

const OverlayCSS: Interpolation<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)"
};

const TimelapseCSS: Interpolation<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const TitleCSS: Interpolation<Theme> = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const TitleHeaderCSS: Interpolation<Theme> = {
  fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
  fontSize: "32px",
  overflowWrap: "break-word",
  color: "white"
}

const Timelapse = `assets/ed-matic-com-timelapse-home-page.mp4`;

export const TopSection = () => (
  <SectionFlex className='Main' css={MainGrid}>
    {/* Banner*/}
    <SectionContainer className="overlay" css={OverlayCSS}></SectionContainer>
    <video
      controls
      src={Timelapse}
      css={TimelapseCSS}
      autoPlay loop muted
    />
    <SectionContainer css={TitleCSS}>
      <h1 css={TitleHeaderCSS}> Ed-Matic </h1>
      <SectionP css={{ lineHeight: "1.8em" }}>
        Software Engineer | Indie Developer | Digital Creator
      </SectionP>
    </SectionContainer>
  </SectionFlex>
)
