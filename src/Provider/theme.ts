import { createMuiTheme } from "@material-ui/core";
import colorSet from "./colorSet";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
    h1: {
      fontSize: 40,
      lineHeight: "64px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    h2: {
      fontSize: 32,
      lineHeight: "48px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    h3: {
      fontSize: 25,
      lineHeight: "40px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    h4: {
      fontSize: 20,
      lineHeight: "32px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    h6: {
      fontSize: 22,
      lineHeight: "35.2px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },

    subtitle1: {
      fontSize: 28,
      lineHeight: "48x",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    caption: {
      fontSize: 12,
      lineHeight: "18px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
    h5: {
      fontSize: 48,
      lineHeight: "72px",
      letterSpacing: "-0.1px",
      fontWeight: "normal",
    },
  },
  palette: {
    primary: {
      light: colorSet.primary50,
      main: colorSet.primary500,
      dark: colorSet.primary600,
      contrastText: colorSet.gray000,
    },
    secondary: {
      light: colorSet.gray100,
      main: colorSet.gray300,
      dark: colorSet.gray400,
      contrastText: colorSet.gray700,
    },
    error: {
      light: colorSet.errorLight,
      main: colorSet.errorBase,
      dark: colorSet.errorDark,
    },
    warning: {
      light: colorSet.warningLight,
      main: colorSet.warningBase,
      dark: colorSet.warningDark,
    },
    text: {
      primary: colorSet.gray900,
      secondary: colorSet.gray600,
      disabled: colorSet.gray300,
    },
  },
});

export default theme;
