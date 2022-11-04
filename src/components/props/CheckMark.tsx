import Box from "./Box"

export const CheckMark = () => (
  <Box>
    <span
      css={{
        display: "inline-block",
        width: 80,
        height: 80,
        // background: "purple",
        WebkitTransform: "rotate(45deg)",
        transform: "rotate(45deg)",
      }}
    >
      <Box
        className={"check-circle"}
        css={{
          backgroundColor: "green",
          borderRadius: "100%",
          height: 22,
          left: 0,
          position: "absolute",
          top: 0,
          width: 22,
        }}
      >
        <div
          className="check-stem"
          css={{
            backgroundColor: "blue",
            height: 9,
            left: 11,
            position: "absolute",
            top: 6,
            width: 3,
          }}
        />
        <div
          className="check-kick"
          css={{
            position: "absolute",
            width: 3,
            height: 3,
            backgroundColor: "blue",
            left: 8,
            top: 12,
          }}
        />
      </Box>
    </span>
  </Box>
)
