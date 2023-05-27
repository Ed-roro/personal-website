import { useState } from "react"
import { NavContainer, NavFlex, NavLink, NavMenu } from "."
import { Bars } from './Bars'


export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavFlex>
      <NavContainer>
        <NavLink to="/" target={""}>
          Home
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
    </NavFlex>
  )
}