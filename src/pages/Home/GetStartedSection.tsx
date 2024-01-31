import { SectionFlex, SectionContainer } from "components/molecules/body"


export const GetStartedSection = () => (
  <SectionFlex
    css={{
      //background:"violet",
      backgroundColor: "#182845!important",
      gridColumn: "span 4",
      gridRow: 4,
    }}
    className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular"
  >
    <SectionContainer
      css={{
        width: "100%",
        color: "white",
      }}
      className="et_pb_text_inner">
      <h4 css={{ color: "rgba(255,255,255,0.4)!important", }}> Get Started </h4>
      <h2>10% Off Your First Foot Exam</h2>
      <a
        className="et_pb_button et_pb_button_7 et_hover_enabled et_pb_bg_layout_light"
        href=""
      >
        Make an Appointment
      </a>
    </SectionContainer>
  </SectionFlex>
)
