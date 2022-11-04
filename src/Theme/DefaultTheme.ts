import Theme, {

  Colors,
  Fonts,

} from "./Theme"

/* Default values for theme */
const colors: Record<Colors, string> = {
  /* SCSS Gradient */
  /* 
--blue-jeans: #00a7ffff;
--white: #ffffffff;
--international-orange-golden-gate-bridge: #ba3232ff;
--vermilion: #e80202ff;
--blue-sapphire: #115980ff;


// $gradient-top: linear-gradient(0deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-right: linear-gradient(90deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-bottom: linear-gradient(180deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-left: linear-gradient(270deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-top-right: linear-gradient(45deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-bottom-right: linear-gradient(135deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-top-left: linear-gradient(225deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-bottom-left: linear-gradient(315deg, #00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff);
// $gradient-radial: radial-gradient(#00a7ffff, #ffffffff, #ba3232ff, #e80202ff, #115980ff); */
  accent: "#ba3232ff",
  accent_1: "#e80202ff",
  background: "#FFFFFF",
  grey: "#AAB2C5",
  heading: "#FFFFFF",
  link: "white",
  link_active: "#ECEFF4",
  navbar: "#050B19",
  placeholder: "#393F4F",
  primary: "#004fe8",
  secondary: "#00A3FF",
  text: "#E5E5E5",
}

const fonts: Record<Fonts, string> = {
  body: `"Open Sans", sans-serif`,
  heading: `"Work Sans", sans-serif`,
}




// const sizes: Record<Sizes, number | string | null> = {
//   width: "sizes",
//   minWidth: "sizes",
//   maxWidth: "sizes",
//   height: "sizes",
//   minHeight: "sizes",
//   maxHeight: "sizes",
//   flexBasis: "sizes",
//   Box: 1080,
//   navbarHeight: 50,
//   size: "sizes",
// }



const DefaultTheme: Theme = {
  colors,
  fonts,
  padding: {
    default: "2rem",
    dense: ".75rem",
  },
  styles: {
    a: {
      color: colors.link,
      textDecoration: "none",
      fontWeight: "bold",
      fontFamily: fonts.body,
      ":hover": {
        color: colors.link_active,
      },
      ":active": {
        color: colors.link_active,
      },
    },
    p: {
      paddingBottom: "0",
      boxSizing: "border-box",
      fontFamily: "Muli , sans-serif",
      fontSize: "14px",
      lineHeight: "1.8em",
      color: "#666",
      padding: "0",
      margin: "0",
      border: "0",
      outline: "0",
      // -webkit-text-size-adjust: "100%",
      verticalAlign: "center",
      textAlign: "center",
      background: "transparent",
    },
  },
  text: {
    copy: {
      color: "white",
      fontFamily: fonts.body,
    },
    heading: {
      fontFamily: fonts.heading,
      fontWeight: 300,
      color: colors.heading,
    },
    accent: {
      color: "#FEF0E8",
    },
    subheading: {
      color: "white",
    },
    metric: {
      fontWeight: 700,
      color: "white",
      fontSize: 36,
    },
  },
  forms: {
    input: {
      border: "none",
      padding: "16px 18px",
      borderBottom: `2px solid ${colors.grey}`,
      background: colors.background,
      borderRadius: "1px",
      outline: "none",
      "&:active": {
        outline: "none",
        borderColor: colors.primary,
      },
      "&:focus": {
        outline: "none",
        borderColor: colors.primary,
      },
    },
    "jumbo-input": {
      variant: "forms.input",
      fontSize: 18,
    },
  },
  buttons: {
    primary: {
      background: `${colors.primary}`,
      border: "none",
      borderRadius: 9999,
      color: "blue",
      cursor: "pointer",
      display: "inline-block",
      fontFamily: "body",
      fontSize: 12,
      fontWeight: "bold",
      marginTop: "3px",
      padding: "30px",
      pointerEvents: "initial",
      textDecoration: "none",
      transform: "translateY(0)",
      transition: "all ease-in-out .12s",
      ":hover": {
        transform: "translateY(-1px)",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
      },
      ":active": {
        transform: "translateY(0)",
        boxShadow: "none !important",
      },
    },
    jumbo: {
      padding: "12px 50px",
      fontSize: 18,
      background: `linear-gradient(90deg, ${colors.primary} -0.08%, ${colors.secondary} 100.08%)`,
    },
    outline: {
      background: "transparent",
      border: `2px solid ${colors.primary}`,
      color: colors.primary,
      ":hover": {
        background: colors.primary,
        color: "white",
        transform: "translateY(-1px)",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
      },
    },
    accent: {
      background: colors.accent,
    },
  },
}

export default DefaultTheme
