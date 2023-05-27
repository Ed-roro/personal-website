import { Global, Interpolation, ThemeProvider } from "@emotion/react"
import { PropsWithChildren } from "react"
import { Footer } from "../components/molecules/footer"
import { Navbar } from "../components/molecules/navigation"
import SEO from "components/seo"
import DefaultTheme from "../Theme/DefaultTheme"

interface Props { }

const BodyCSS: Interpolation<ThemeProvider> = {
  background: "#121212",
  width: "100vw"
}

const GlobalStyles: Interpolation<ThemeProvider> = {
  body: {
    margin: 0
  },
  "*": {
    boxSizing: "border-box",
    ":before": {
      boxSizing: "border-box",
    },
    ":after": {
      boxSizing: "border-box",
    },
  },
}

const DefaultLayout = ({ children }: PropsWithChildren<Props>) => (
  <body css={BodyCSS}>
    {/* Main Page Backgroung Color */}
    <ThemeProvider theme={DefaultTheme}>
      <Global styles={GlobalStyles} />
      <SEO />
      <Navbar />
      <main> {children} </main>
      <Footer />
    </ThemeProvider>
    </body>
)

export default DefaultLayout
