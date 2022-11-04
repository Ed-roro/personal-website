import styled from "@emotion/styled"
import { mq } from "Theme/MediaQueries"

export const Bars = styled.button({
  display: "flex",
  flexDirection: "column",
  margin: 20,
  cursor: "pointer",
  [`span`]: {
    height: 3,
    width: 25,
    background: "black",
    borderRadius: 5,
    margin: 4,
  },
  [mq.lg]: {
    display: "none",
  },
})
