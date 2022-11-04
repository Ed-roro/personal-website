import Grid from "components/props/Grid"
import {
  AboutMySelf,
  Bio
} from "components/pages/About"
import DefaultLayout from "Layout/DefaultLayout"

function About() {
  return (
    <DefaultLayout>
      <Grid
        css={{
          alignContent: "space-evenly",
          alignItems: "center",
          gap: 10,
          padding: "10px",
        }}
      >
        <AboutMySelf />
        <Bio />
      </Grid>
    </DefaultLayout>
  )
}
export default About
