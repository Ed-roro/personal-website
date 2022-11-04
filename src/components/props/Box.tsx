import { ReactNode } from "react"

export interface BoxProps {
  as?: string
  background?: string
  boxSizing?: string | string[]
  className?: string
  children?: ReactNode
  container?: boolean
  centered?: boolean
  dense?: string
  display?: boolean
  margin?: number
  marginBottom?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginTop?: string | number
  marginX?: string | number
  marginY?: string | number
  padding?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingX?: string | number
  paddingY?: string | number
  width?: string | number
}

const Box = (props: BoxProps) => (
  <div
    css={{
      background: "white",
      boxSizing: "border-box",
      padding: 10,
    }}
    {...props}
  />
)

export default Box
