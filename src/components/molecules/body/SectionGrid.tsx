import Grid, { GridProps } from "components/props/Grid"
import { mq } from "Theme/MediaQueries"

const SectionGrid = (props: GridProps) => (
  <Grid
    css={{
      alignContent: "center",
      background: "transparent",
      boxSizing: "border-box",
      display: "grid",
      gridRow: 5,
      margin: 10,
      position: "relative",
      width: "80%",
      [mq.lg]: {
        maxWidth: 1080,
        gap: 10,
        // width: "auto",
        // height: "auto",
      },
    }}
    {...props}
  />
)
export default SectionGrid
