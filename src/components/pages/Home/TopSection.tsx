import {
  SectionFlex,
  SectionContainer,
  SectionP
} from "components/molecules/body"
import {Interpolation, Theme } from '@emotion/react'
import ReactPlayer from "react-player"
import { mq } from "Theme/MediaQueries"

const MainGrid: Interpolation<Theme> = {
  gridRow: 1,
  margin: "auto",
  alignContent: "space-evenly",
  alignItems: "center",
  position: "relative",
  width: "100vw",
  [mq.lg]: {
    maxWidth: 1080,
  },
};


export const TopSection = () => (
  <SectionFlex css={MainGrid}>
    {/* Banner*/}
    <ReactPlayer
      url='https://www.youtube.com/watch?v=cCA6MMjAib4'
      speed={1.5}
      playing={true}
      muted={true}
      loop={true}
      controls={false}
      style={{
        width: "100vw",
        height: "100vh",

      }}
    />
    <SectionContainer>
      <h1
        css={{
          fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
          fontSize: "32px",
          overflowWrap: "break-word",
          color: "white"
        }}
      >
        Ed-Matic
      </h1>
      <SectionP css={{ lineHeight: "1.8em" }}>
        Software Engineer | Indie Developer | Digital Creator
      </SectionP>
    </SectionContainer>
  </SectionFlex >
)
