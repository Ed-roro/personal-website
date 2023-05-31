import { useTheme } from "@emotion/react"
import {
  SectionContainer,
  SectionFlex,
  SectionGrid,
} from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

export const CardsSection = () => {
  const theme = useTheme()
  return (
    <SectionGrid
      css={{
        background: "#1E1C1C",
        margin: "auto",
        position: "relative",
        width: "100%",
        [mq.lg]: {
          maxWidth: 1080,
        },
        gridRow: 3,
      }}
      display={"grid"}
    >
      <SectionFlex
        css={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "nowrap",
          gap: 10,
          margin: "auto",
          position: "relative",
          width: "100%",
          padding: "50px 0",
          [mq.lg]: {
            flexDirection: "row",
          },
        }}
      >
        <SectionContainer
          css={{
            background: "#3E3746",
            padding: 50,
            boxSizing: "border-box",
          }}
        >
          <h4 css={{ color: "rgba(0,0,0,0.4)!important" }}>Games</h4>

          <h3>Game Development</h3>

          <p css={{ color: "white" }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.
          </p>
          <a
            href=""
            data-icon="="
          >
            View Details {"=>"}
          </a>
        </SectionContainer>
        <SectionContainer
          css={{
            padding: 50,
            backgroundColor: "#182845",
            boxSizing: "border-box",
          }}
        >
          <h4 css={{ color: "rgba(255,255,255,0.4)!important" }}>Stories</h4>
          <h3 css={{ color: "white" }}>Film & Animations</h3>
          <p css={{ color: "white" }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.
          </p>
          <a
            href=""
            data-icon="="
          >
            View Details
          </a>
        </SectionContainer>
        <SectionContainer
          css={{
            background: theme.colors.primary,
            //background: "white",
            padding: 50,

            backgroundColor: "#004fe8",
            boxSizing: "border-box",
          }}
        >
          <h4 css={{ color: "rgba(255,255,255,0.4)!important" }}>Music</h4>
          <h3 css={{ color: "white" }}>Music Production</h3>
          <p css={{ color: "white" }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.
          </p>
          <a
            href=""
            data-icon="="
          >
            View Details
          </a>
        </SectionContainer>
        <SectionContainer
          css={{
            padding: 50,
            background: "#3E3746",

            //background: "teal",
            // boxSizing: "border-box",
          }}
        >
          <h4 css={{ color: "rgba(0,0,0,0.4)!important" }}>PC Builds</h4>
          <h3>Gaming & Workstations</h3>
          <p css={{ color: "white" }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.
          </p>
          <a
            href=""
            data-icon="="
          >
            View Details
          </a>
        </SectionContainer>
      </SectionFlex>
    </SectionGrid>
  )
}
