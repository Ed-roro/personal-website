import { CSSInterpolation } from "@emotion/serialize"

/* Type definitions for theme */

// export type Breakpoints = "s" | "m" | "l" | "xl"

export type Colors =
  | "accent"
  | "accent_1"
  | "background"
  | "grey"
  | "heading"
  | "link"
  | "link_active"
  | "navbar"
  | "placeholder"
  | "primary"
  | "secondary"
  | "text"

 


export type Fonts =
  | "body"
  | "heading"
  

export type Padding = "default" | "dense"

export type Shadows = "boxShadow" | "textShadow"

export type StyledElements = "a" | "p"

export type FormVariants = "input" | "jumbo-input"

export type ButtonVariants = "primary" | "jumbo" | "outline" | "accent"

export type NavMenuOpen = "open"

export type TextVariants =
  | "copy"
  | "heading"
  | "accent"
  | "subheading"
  | "metric"

interface Variants {
  text: Record<TextVariants, CSSInterpolation>
  forms: Record<FormVariants, CSSInterpolation>
  buttons: Record<ButtonVariants, CSSInterpolation>
}

interface Theme extends Variants {
  colors: Record<Colors, string>
  fonts: Record<Fonts, string>
  padding: Record<Padding, string | number>
  styles: Record<StyledElements, CSSInterpolation>
}

export default Theme
