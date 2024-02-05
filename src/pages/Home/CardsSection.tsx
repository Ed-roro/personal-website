import {
  SectionContainer,
  SectionGrid,
} from "components/molecules/body"
import {CardSectionCSS} from '../../styles/Home'
export const CardsSection = () => {
  return (
    <SectionGrid css={CardSectionCSS.CardSectionGrid} display={"grid"}>

      <SectionContainer css={CardSectionCSS.BoxContainer}>
        <h4 css={{ color: "rgba(0,0,0,0.4)!important" }}>Games</h4>

        <h3>Game Development</h3>

        <p css={{ color: "white" }}>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus.
        </p>
        <a href="" data-icon="="> View Details {"=>"} </a>
      </SectionContainer>

      <SectionContainer css={CardSectionCSS.BoxContainer}>
        <h4 css={{ color: "rgba(255,255,255,0.4)!important" }}>Stories</h4>

        <h3 css={{ color: "white" }}>Film & Animations</h3>

        <p css={{ color: "white" }}>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus.
        </p>
        <a href="" data-icon="="> View Details </a>
      </SectionContainer>

      <SectionContainer css={CardSectionCSS.BoxContainer}>
        <h4 css={{ color: "rgba(255,255,255,0.4)!important" }}>Music</h4>

        <h3 css={{ color: "white" }}>Music Production</h3>

        <p css={{ color: "white" }}>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus.
        </p>
        <a href="" data-icon="="> View Details </a>
      </SectionContainer>

      <SectionContainer css={CardSectionCSS.BoxContainer} >
        <h4 css={{ color: "rgba(0,0,0,0.4)!important" }}>PC Builds</h4>

        <h3>Gaming & Workstations</h3>

        <p css={{ color: "white" }}>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus.
        </p>
        <a href="" data-icon="="> View Details</a>
      </SectionContainer>

    </SectionGrid>
  )
}
