import styled from "@emotion/styled"
import { Link } from "gatsby"

interface LinkProps {
  color?: string
  cursor?: string
  fontSize?: string
  height?: string
  padding?: string
  target: string
  textDecoration?: string
  to: string
  transition?: string
}

export const NavLink = styled(Link)<LinkProps>(
  {
    color: "white",
    textDecoration: "none",
    padding: "1rem 2rem",
    textAlign: "center",
    height: "100%",
    cursor: "pointer",
    transition: "all 0.2s ease-in",
    fontSize: "0.9rem",
    hover:{
      color: "#15cdfc",
    }
  },
  (Props: LinkProps) => ({
    color: Props.color,
    textDecoration: Props.textDecoration,
    padding: Props.padding,
    height: Props.height,
    cursor: Props.cursor,
    transition: Props.transition,
    fontSize: Props.fontSize,
  })
)
