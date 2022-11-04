import {
  TopSection,
  CardsSection,
} from "components/pages/Home"
import Grid from "components/props/Grid"
import DefaultLayout from "Layout/DefaultLayout"

function Home() {
  return (
    <DefaultLayout>
      <Grid
        css={{
          alignContent: "space-evenly",
          alignItems: "center",
          gap: 10,
          width: "100%"
        }}
      >
        <TopSection />
        <CardsSection />
      </Grid>
    </DefaultLayout>
  )
}
export default Home
