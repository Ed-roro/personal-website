import { Global, ThemeProvider } from "@emotion/react"
import { PropsWithChildren } from "react"
import { Footer } from "../components/molecules/footer"
import { Navbar } from "../components/molecules/navigation"
import SEO from "components/seo"
import DefaultTheme from "../Theme/DefaultTheme"

interface Props { }

const DefaultLayout = ({ children }: PropsWithChildren<Props>) => (
  <body css={{
    background: "#121212",
    width: "100vw"
  }}> {/* Main Page Backgroung Color */}
      <ThemeProvider theme={DefaultTheme}>
      <Global
        styles={{
          body: {
            margin : 0
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
        }}
      />
      <SEO />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
  </ThemeProvider>
    </body>
)

export default DefaultLayout
