import Box from "components/props/Box"
import { CheckMark } from "components/props/CheckMark"
import {
  SectionFlex,
  SectionContainer,
} from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

export const MissionStatement = () => (
  <SectionFlex
    css={{
      // alignContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      justifyItems: "center",
      //flexWrap: "nowrap",
      //padding: "30px 0px",
      //overflowWrap: "break-word",
      [mq.lg]: {
        gridColumn: "2/ span 2",
        maxWidth: 1080,
      },
      // textAlign:"left"
    }}
  >
    <SectionContainer>
      <h2>To fulfill this mission, we are committed to:</h2>
    </SectionContainer>
  </SectionFlex>
)
