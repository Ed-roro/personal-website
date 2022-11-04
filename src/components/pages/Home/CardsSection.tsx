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
            // maxWidth: "1400px",
          },
        }}
      >
        <SectionContainer
          css={{
            background: theme.colors.primary,
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
            className="et_pb_button et_pb_button_2 et_hover_enabled et_pb_bg_layout_light"
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
            className="et_pb_button et_pb_button_3 et_hover_enabled et_pb_bg_layout_light"
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
            className="et_pb_button et_pb_button_5 et_hover_enabled et_pb_bg_layout_light"
            href=""
            data-icon="="
          >
            View Details
          </a>
        </SectionContainer>
        <SectionContainer
          css={{
            padding: 50,
            background: theme.colors.primary,

            //background: "teal",
            // boxSizing: "border-box",
          }}
        >
          <h4 css={{ color: "rgba(0,0,0,0.4)!important" }}>PC Builds</h4>
          <h3>Gaming & Workstation Systems</h3>
          <p css={{ color: "white" }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.
          </p>
          <a
            className="et_pb_button et_pb_button_4 et_hover_enabled et_pb_bg_layout_light"
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
