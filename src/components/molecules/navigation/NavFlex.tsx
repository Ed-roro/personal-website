import Flex, { FlexProps } from "components/props/Flex"

export const NavFlex = (props: FlexProps) => (
  <Flex
    css={{
      background: "transparent",
      alignItems: "center",
      boxShadow: "0px 0px 20px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gridColumn: "span 4",
      gridRow: 1,
      height: "100%",
      justifyContent: "space-between",
      width: "100%",
    }}
    {...props}
  />
)