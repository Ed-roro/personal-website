import {
  SectionFlex,
  SectionContainer,
  SectionP
} from "components/molecules/body"
import {TopSectionCSS} from '../../Styles/Home'

const Timelapse = `assets/ed-matic-com-timelapse-home-page.mp4`;

export const TopSection = () => (
  <SectionFlex className='Main' css={TopSectionCSS.TopSectionGrid}>
    {/* Banner*/}
    <SectionContainer className="overlay" css={TopSectionCSS.OverlayCSS}></SectionContainer>
    <video
      controls
      src={Timelapse}
      css={TopSectionCSS.TimelapseCSS}
      autoPlay loop muted
    />
    <SectionContainer css={TopSectionCSS.TitleCSS}>
      <h1 css={TopSectionCSS.TitleHeaderCSS}> Ed.roro </h1>
      <SectionP css={{ lineHeight: "1.8em" }}>
        Software Engineer | Indie Developer | Digital Artist
      </SectionP>
    </SectionContainer>
  </SectionFlex>
)
