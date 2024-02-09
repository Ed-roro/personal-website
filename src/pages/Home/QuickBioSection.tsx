import {
  SectionGrid,
  SectionContainer,
  SectionImageContainer,
  SectionP,
  SectionH,
} from "components/molecules/body"
import {QuickBioSectionCSS} from '../../styles/Home'
import { mq } from "Theme/MediaQueries"
export const QuickBioSection = () => (
  <SectionGrid css={QuickBioSectionCSS.MainGridCSS}>
      
      {/* left column */}
      <SectionContainer>
          <SectionImageContainer>
              <img
                  loading="lazy"
                  src={`assets/turtle-neck_ed.jpg`}
                  alt=""
                  title=""
                  className="wp-image-224474"
                  css={{
                      maxWidth: "100vw",
                      height: "auto",
                      [mq.lg]: {
                          maxWidth: 700,
                      },
                  }}
              />
          </SectionImageContainer>

          <SectionH>The things I do and my creative work</SectionH>
          <SectionP>
              Your content goes here. Edit or remove this text inline or in the
              module Content settings. You can also style every aspect of this
              content in the module Design settings and even apply custom CSS to
              this text in the module Advanced settings.
          </SectionP>
          
      </SectionContainer>

      {/* right column */}
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
              <SectionH>Bringing both Technology & Art together in a independent form</SectionH>
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
                  src={`assets/anne-nygard-_W94Eb1iNYc-unsplash.jpg`}
                  alt=""
                  title=""
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
  </SectionGrid>
)