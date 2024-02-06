import { SectionFlex, SectionContainer } from "components/molecules/body"


export const GetStartedSection = () => (
  <SectionFlex
    css={{
        gridRow: 5,
      backgroundColor: "#182845!important",
      gridColumn: "span 4",
    }}
    className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular"
  >
    <SectionContainer
      css={{
        width: "100%",
        color: "white",
      }}
      className="et_pb_text_inner">
      <h4 css={{ color: "rgba(255,255,255,0.4)!important", }}> Get all the Perks </h4>
      <h2>Subscribe and get videos 2 weeks early!</h2>
      <a
        className="et_pb_button et_pb_button_7 et_hover_enabled et_pb_bg_layout_light"
        href=""
      >
        Subscribe!
      </a>
    </SectionContainer>
  </SectionFlex>
)
