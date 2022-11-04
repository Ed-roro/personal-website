import {
  SectionGrid,
  SectionFlex,
  SectionContainer,
  SectionImageContainer,
  SectionP,
  SectionH,
} from "components/molecules/body"
import { mq } from "Theme/MediaQueries"

export const ExamSection = () => (
  <SectionGrid
    css={{
      gridRow: 2,
      boxSizing: "border-box",
      //margin: 10,
      position: "relative",
      width: "100%",
      [mq.lg]: {
        //maxWidth: 1080,
      },
    }}
    className=""
    display={"grid"}
  >
    <SectionFlex
      css={{
        flexDirection: "column",
        flexWrap: "nowrap",
        padding: 15,
        [mq.lg]: {
          display: "flex",
          flexDirection: "row",
          maxWidth: 1080,
        },
      }}
    >
      {/* left column */}
      <SectionFlex
        css={{
          //gridColumn: "span 2",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <SectionContainer></SectionContainer>
        <SectionImageContainer
          css={{
            boxSizing: "border-box",
            maxWidth: 1080,
          }}
        >
          <img
            loading="lazy"
            // width="800"
            // height="1202"
            src={`assets/turtle-neck_ed.jpg`}
            alt=""
            title=""
            //sizes="(max-width: 500px) 100vw, 500px"
            className="wp-image-224474"
            css={{
              maxWidth: "100vw",
              height: "auto",
              [mq.lg]: {
                maxWidth: 500,
              },
            }}
          />
        </SectionImageContainer>
      </SectionFlex>
      {/* right column */}
      <SectionFlex
        css={{
          gridColumn: "3 / span 2",
        }}
      >
        <SectionContainer>
          <SectionImageContainer>
            <img
              loading="lazy"
              src={`assets/creative-style_ed.jpg`}
              alt=""
              title=""
              sizes="(max-width: 500px) 100vw, 1000px"
              className="wp-image-224455"
              css={{
                maxWidth: "100vw",
                height: "auto",
                [mq.lg]: {
                  maxWidth: 500,
                },
              }}
            />
          </SectionImageContainer>
          <SectionContainer>
            <SectionH>Regular Foot Exams and Checkups</SectionH>
            <SectionP>
              Your content goes here. Edit or remove this text inline or in the
              module Content settings. You can also style every aspect of this
              content in the module Design settings and even apply custom CSS to
              this text in the module Advanced settings.
            </SectionP>
            <span>
              R
            </span>
            <SectionH>
              <span>Vestibulum ante ipsum primis in fau</span>
            </SectionH>
            <span>
              R
            </span>
            <SectionH>
              <span>Vestibulum ante ipsum primis in fau</span>
            </SectionH>
            <span>
              R
            </span>
            <SectionH>
              <span>Vestibulum ante ipsum primis in fau</span>
            </SectionH>
            <span>
              R
            </span>
            <SectionH>
              <span>Vestibulum ante ipsum primis in fau</span>
            </SectionH>
          </SectionContainer>
          <SectionImageContainer>
            <img
              loading="lazy"
              // width="70%"
              // height="70%"
              src={`assets/anne-nygard-_W94Eb1iNYc-unsplash.jpg`}
              alt=""
              title=""
              // sizes="(max-width: 1000px) 100vw, 1000px"
              className="wp-image-224475"
              css={{
                maxWidth: "100vw",
                height: "auto",
                [mq.lg]: {
                  maxWidth: 500,
                },
              }}
            />
          </SectionImageContainer>
        </SectionContainer>
      </SectionFlex>
    </SectionFlex>
  </SectionGrid>
)
