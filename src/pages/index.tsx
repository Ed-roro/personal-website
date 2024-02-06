import { Interpolation, Theme } from "@emotion/react"
import {
  TopSection,
  CardsSection,
  QuickBioSection,
    WhatWeDoSection,
    GetStartedSection,
} from "pages/Home"
import Grid from "components/props/Grid"
import DefaultLayout from "Layout/DefaultLayout"

const MainGrid: Interpolation<Theme> = {
  alignContent: "space-evenly",
  alignItems: "center",
  gap: 10,
  width: "100%"
};

function Home() {
  return (
    <DefaultLayout>
      <Grid css={MainGrid}>
        <TopSection />
        <QuickBioSection/>
        <CardsSection />
        <WhatWeDoSection/>
        <GetStartedSection/>
      </Grid>
    </DefaultLayout>
  )
}
export default Home
