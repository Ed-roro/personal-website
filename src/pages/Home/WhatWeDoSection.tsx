import {
  SectionGrid,
  SectionFlex,
  SectionContainer,
  SectionHead,
  SectionP,
} from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

export const WhatWeDoSection = () => (
  <SectionGrid
    css={{
      gridRow: 4,
      background:"#28282B",
      margin: "auto",
      position: "relative",
      width: "90%",
      height:"100%",
      [mq.lg]: {
        maxWidth: 1080,
      },
    }}
    display={"grid"}
  >
    <SectionFlex
      css={{
        flexDirection: "column",
        flexWrap: "nowrap",
        [mq.lg]: {
          display: "flex",
          flexDirection: "row",
          maxWidth: 1080,
        },
      }}
    >
      <SectionContainer>
        <span
          css={{
            display: "inline-block",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <img
            loading="lazy"
            width="500"
            height="611"
            src={`assets/ed-matic_comic_headshot.jfif`}
            alt=""
            title=""
            sizes="(max-width: 500px) 100vw, 500px"
            className=""
            css={{
              maxWidth: "100vw",
              height: "auto",
              [mq.lg]: {
                maxWidth: 500,
              },
            }}
          />
        </span>
      </SectionContainer>

      <SectionContainer>
        <SectionHead>
          <h4
            css={{
              fontFamily: "'Poppins',Helvetica,Arial,Lucid,sans-serif",
              fontWeight: "600",
              textTransform: "uppercase",
              fontSize: "14px",
              color: "white",
              letterSpacing: "2px",
              lineHeight: "1.6em",
            }}
          >
            Identity of Self
          </h4>
        </SectionHead>

        <SectionHead>
          <h2
            css={{
              fontFamily: "'Poppins',Helvetica,Arial,Lucid,sans-serif",
              fontWeight: "600",
              fontSize: "48px",
              color: "#333",
              letterSpacing: "2px",
              lineHeight: "1.3em",
            }}
          >
            Who Am I?
          </h2>
        </SectionHead>

        <SectionP
          css={{
            color: "white",
          }}
        >
          I am a Jr. Software Engineer in Albuquerque, New Mexico, USA.
          Indie (Game, Animation, Website, Video) developer, and a simply lover of life and philosophy
          and free thought. I aspire to create new things and new outlooks.
        </SectionP>
      </SectionContainer>
    </SectionFlex>
  </SectionGrid>
)
