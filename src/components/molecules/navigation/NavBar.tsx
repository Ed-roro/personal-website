import { useState } from "react"
import { NavContainer, NavLink, NavMenu } from "."
import { Bars } from './Bars'
import Flex from "components/props/Flex"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Flex
      css={{
        background: "white",
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
    >
      <NavContainer>
        <NavLink to="/" target={""}>
          <h1>Home</h1>
        </NavLink>
      </NavContainer>
      <Bars onClick={_e => setOpen(prev => !prev)}>
        <span />
        <span />
        <span />
      </Bars>

      <NavMenu open={open}>
        <NavLink to="/AboutMe" target={""}>
          About
        </NavLink>
        <NavLink to="/projects" target={""}>
          Projects
        </NavLink>
        <NavLink to="/resume" target={""}>
          Resume
        </NavLink>
        <NavLink to="/contact" target={""}>
          Contact
        </NavLink>
      </NavMenu>
    </Flex>
  )
}