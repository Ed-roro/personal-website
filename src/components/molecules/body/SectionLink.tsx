import styled from "@emotion/styled"
import { Link } from "gatsby"

const SectionLink = styled(Link)({
  color: "black",
  display: "flex",
  alignItems: "center",
  textDecoration:"none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",
  active: {
    color: "#15cdfc"
  }

})

export default SectionLink;
