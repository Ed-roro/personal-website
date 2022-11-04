import Flex, { FlexProps } from "components/props/Flex"

const SectionFlex = (props: FlexProps) => (
  <Flex
    css={{
      alignContent: "center",
      alignItems: "center",
      background: "transparent",
      boxSizing: "border-box",
      display: "flex",
      gridColumn: "span 4",
      
    }}
    {...props}
  />
)
export default SectionFlex
