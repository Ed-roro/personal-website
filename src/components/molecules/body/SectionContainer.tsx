import Box, { BoxProps } from "components/props/Box"

const SectionContainer = (props: BoxProps) => (
  <Box
    css={{
      alignContent: "center",
      alignItems: "center",
      alignSelf: "auto",
      background: "transparent",
      boxSizing: "border-box",
      justifyContent: "center",
      justifyItems: "center",
      textAlign: "center",
      // width: "100vw",
      // height: "auto",
    }}
    {...props}
  />
)
export default SectionContainer
