import { FooterContainer, FooterLink, FooterLinkMenu } from "."

const FooterSocialMenu = () => (
  <FooterContainer>
    <FooterLinkMenu>
      <FooterLink css={{ textAlign: "center" }} to={"https://www.facebook.com"}>
        <div>Facebook</div>
      </FooterLink>
      <FooterLink to={"https://www.twitter.com"}>
        <div>Twitter</div>
      </FooterLink>
    </FooterLinkMenu>
  </FooterContainer>
)

export default FooterSocialMenu
// alignItems: "center",
// display: "flex",
// flexDirection: "row",
// margin: 10,
// textAlign: "center",
