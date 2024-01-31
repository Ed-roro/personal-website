import styled from "@emotion/styled"

interface FooterLinkProps {
  to: string
  alignItems?: string
  color?: string
  cursor?: string
  display?: string
  height?: string
  padding?: string
  textDecoration?: string
}

const FooterLink = styled.a((Props: FooterLinkProps) => ({
  alignItems: Props.alignItems || " center",
  color: Props.color || "white",
  cursor: Props.cursor || "pointer",
  display: Props.display || "flex",
  height: Props.height || "100%",
  padding: Props.padding || "0 1rem",
  textDecoration: Props.textDecoration || " none",
  to: Props.to,
  active: {
    color: "#15cdfc",
  },
}))
export default FooterLink
