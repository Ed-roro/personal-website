import { ReactNode } from "react"
import Box from "./Box"

export interface GridProps {
  background?: string
  children?: ReactNode
  className?: string
  container?: boolean
  gridAutoColumns?: string
  gridAutoRows?: string
  gridColumn?: string
  gridRow?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  /****** Container Props ********/
  alignContent?:
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"

  alignItems?: "start" | "end" | "center" | "stretch"
  display?: "grid" | "inline-grid" | "subgrid"
  gap?: number | "grid-gap" | "grid-column-gap" | "grid-row-gap"
  gridAutoFlow?: "row" | "column" | "dense"
  gridTemplate?: "grid-template-columns" | "grid-template-rows"
  justifyContent?:
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
  /****** Child Props ********/
  alignSelf?: string
  gridColumns?: number | string
  gridRows?: number | string
  gridRowColumn?: number | string
  justifyItems?: "start" | "end" | "center" | "stretch"
  justifySelf?: string
  /****** Common Layout Props ********/
  height?: string
  margin?: string
  maxHeight?: string
  maxWidth?: string
  padding?: string
  width?: string
}
const Grid = (props: GridProps) => {
  return (
    <Box
      className={props.className}
      css={{
        alignContent: props.alignContent || "center",
        alignItems: props.alignItems || "center",
        alignSelf: props.alignSelf || "center",
        background: props.background || "transparent",
        display: props.display ? "grid" : "inline-grid" || "subgrid",
        gridAutoColumns: props.gridAutoColumns || "auto",
        gridAutoFlow: props.gridAutoFlow || "row",
        gridAutoRows: props.gridAutoRows || "auto",
        gridColumn: props.gridColumns || "span 4",
        gap: props.gap || 10,
        gridRow: props.gridRow || "auto",
        gridRowColumn: props.gridRowColumn || "",
        gridTemplate: props.gridTemplate || "auto auto",
        gridTemplateColumns: props.gridTemplateColumns || "repeat(4,1fr)",
        gridTemplateRows: props.gridTemplateRows || "auto",
        height: props.height || "auto",
        justifyContent: props.justifyContent || "center",
        justifyItems: props.justifyItems || "center",
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
export default Grid
