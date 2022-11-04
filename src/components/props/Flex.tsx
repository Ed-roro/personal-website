import { ReactNode } from "react"
import Box from "./Box"

export interface FlexProps {
  justifyItems?: string
  background?: string
  children?: ReactNode
  className?: string
  container?: boolean
  display?: boolean
  /****** Container Props ********/
  alignContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "stretch"
  alignItems?:
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "stretch"
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse"
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "space-around"
    | "space-between"
    | "space-evenly"

  /****** Child Props ********/
  alignSelf?: string
  flex?: string | number
  flexBasis?: number | string
  flexGrow?: number
  flexShrink?: number
  order?: number
  /****** Common Layout Props ********/
  height?: string
  margin?: string
  maxHeight?: string
  maxWidth?: string
  padding?: string
  width?: string
}

const Flex = (props: FlexProps) => {
  return (
    <Box
      className={props.className}
      css={{
        alignContent: props.alignContent || "center",
        alignItems: props.alignItems || "center",
        background: props.background || "transparent",
        display: props.display ? "flex" : "block",
        flex: props.flex || "0 1 auto",
        flexBasis: props.flexBasis || "auto",
        flexDirection: props.flexDirection || "row",
        flexGrow: props.flexGrow || 0,
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || "nowrap",
        height: props.height || "auto",
        justifyContent: props.justifyContent || "center",
        margin: props.margin || 0,
        maxWidth: props.maxWidth || "100vw",
        padding: props.padding || 0,
        width: props.width || "100%",
      }}
    >
      {props.children}
    </Box>
  )
}
export default Flex
