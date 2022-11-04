import { Theme, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  background?: string
  border?: string
  borderRadius?: number
  children?: ReactNode
  class?: string
  color?: string
  cursor?: string
  display?: string
  fontSize?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  open?: boolean
  textAlign?: string | string[] | undefined
  textDecoraction?: string
  theme?: Theme
  variant?: string
  width?: number
}
const Button = styled.button((props: ButtonProps) => {
  const theme = useTheme()
  return (theme.buttons = [props.variant])
})

export default Button
