import {
  SectionGrid,
  SectionFlex,
  SectionContainer,
  SectionP
} from "components/molecules/body"
import ReactPlayer from "react-player"
import { mq } from "Theme/MediaQueries"

export const TopSection = () => (
  <SectionGrid
    css={{
      gridRow: 1,
      margin: "auto",
      alignContent: "space-evenly",
      alignItems: "center",
      position: "relative",
      width: "100vw",
      [mq.lg]: {
        maxWidth: 1080,
      },
    }}
  >
    {/* Banner*/}
    <SectionFlex
      css={{
        alignContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        justifyItems: "center",
        flexWrap: "nowrap",
        overflowWrap: "break-word",
        [mq.lg]: {
          gridColumn: "2/ span 1",
          maxWidth: 1080,
        },
      }}
    >
      <SectionFlex
        css={{
          height: "50vw",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1E1C1C",
          //flexWrap: "wrap",
          width: "100vw",
          padding: 10,
        }}
      >
        {/* Title */}
        <SectionContainer>
          <h1
            css={{
              fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
              fontSize: "32px",
              overflowWrap: "break-word",
              color: "white"
            }}
          >
            Ed-Matic
          </h1>
          <SectionP css={{ lineHeight: "1.8em" }}>
            Software Engineer | Indie Developer | Digital Creator
          </SectionP>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=cCA6MMjAib4'
            speed={1.5}
            playing={true}
            muted={true}
            loop={true}
            controls={false}
          />
        </SectionContainer>

        {/* Banner Buttons */}
      </SectionFlex>
    </SectionFlex>
  </SectionGrid >
)
