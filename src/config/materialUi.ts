import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#26A4DA",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EEF8FC",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#1F1F1F",
      secondary: "#595959",
      disabled: "#BFBFBF",
    },
    divider: "#F0F0F0",
    background: {
      default: "#EFFFFF",
      paper: "#F5F5F5",
    },
    action: {
      disabledBackground: "#D9D9D9",
    },
    error: {
      main: "#DA2626",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#DAC826",
      contrastText: "#1F1F1F",
    },
    success: {
      main: "#26DA8E",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
