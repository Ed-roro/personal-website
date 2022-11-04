import Box, { BoxProps } from "components/props/Box";

const SectionImageContainer = (props: BoxProps) => (
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
      outlineColor: "invert",
    }}
    {...props}
  >
  </Box>
)
export default SectionImageContainer
