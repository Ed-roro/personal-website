import {
  SectionFlex,
  SectionImageContainer,
  SectionHead,
} from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

const ContactSection = () => (
  <SectionFlex
    css={{
      backgroundColor: "#1E1C1C",
      width: "100vw",
      height: "auto"
    }}>
    <SectionFlex css={{
      width: "100vw",
      height: "auto"
    }}>
      <SectionImageContainer>
        <img
          css={{
            width: "auto",
            height: "auto",
            [mq.lg]: {
              maxWidth: 500,
            },
          }}
          src={`assets/pexels-roman-odintsov-6193626.jpg`}
        ></img>
      </SectionImageContainer>
    </SectionFlex>

    <SectionFlex css={{
      width: "100vw",
      height: "auto"
    }}>
      <SectionHead
        css={{
        width: "100%",
        color: "white",
      }}>
        <h3>Email Us</h3>
        <h4>software@iteamnm.com</h4>
      </SectionHead>
    </SectionFlex>
  </SectionFlex>
)
export default ContactSection
