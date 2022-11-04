import Flex, { FlexProps } from "components/props/Flex"

export const NavFlex = (props: FlexProps) => (
  <Flex
    css={{
      alignItems: "center",
      background: "#ba3232ff",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      height: 50,
      justifyContent: "space-around",
      justifyItems:"center",
      padding: "10px",
      position:"fixed",
      width: "100vw",
    }}
    {...props}
  />
)