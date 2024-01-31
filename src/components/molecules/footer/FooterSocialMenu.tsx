import { FooterContainer, FooterLink, FooterLinkMenu } from "."

const FooterSocialMenu = () => (
  <FooterContainer>
    <FooterLinkMenu>
      <FooterLink to={"https://www.facebook.com"}>
        <div>Facebook</div>
      </FooterLink>

      <FooterLink to={"https://www.instagram.com"}>
        <div>Instagram</div>
      </FooterLink>

      <FooterLink to={"https://www.linkedin.com"}>
        <div>Linkedin</div>
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
