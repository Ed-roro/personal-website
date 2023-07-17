import { SectionFlex, SectionContainer } from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

export const Locations = () => (
  <SectionFlex
    css={{
      // alignContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
      justifyItems: "center",
      flexWrap: "nowrap",
      gridRow: 2,
      padding: "30px 0px",
      overflowWrap: "break-word",
      [mq.lg]: {
        gridColumn: "2/ span 2",
        // maxWidth: 1080,
      },
      // textAlign:"left"
    }}
  >
    <h2>Locations</h2>
    <SectionContainer>
      <h3>Albuquerque</h3>
    </SectionContainer>
    <SectionContainer>
      <h3>Farmington</h3>
    </SectionContainer>
  </SectionFlex>
)
