import styled from "@emotion/styled"

export interface NavMenuProps {
  open: boolean
}

export const NavMenu = styled.nav<NavMenuProps>`
display: flex;
flex-direction: column;
justify-items: space-between;
max-height: ${({ open }) => (open ? "300px" : "0px")};
overflow: hidden;
position: relative;
width: 100%;
@media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    justify-items: space-between;
    max-height: initial;
    width: initial;
  }
`
