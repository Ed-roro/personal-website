import { FooterContainer, FooterCredits, FooterSocialMenu } from "."
import Flex from "components/props/Flex"
import ContactSection from "pages/Contact/ContactSection"

const Footer = () => {
  return (
    <Flex
      css={{
        alignItems: "center",
        //background: "#ba3232ff",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "auto",
        justifyContent: "space-around",
        justifyItems: "center",
        padding: "10px",
        // position: "fixed",
        width: "100vw",
      }}
    >
      <FooterContainer
        css={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "flex-end",
        }}
      >
        <ContactSection />
        <FooterCredits>
          <p id="footer-info">
            Designed by &nbsp;Ed-Matic
          </p>
          &nbsp;
          <p> Coded with Gatsby, JavaScript, and TypeScript</p>
        </FooterCredits>
        <FooterSocialMenu />
      </FooterContainer>
    </Flex>
  )
}
export default Footer
