import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#d87aad",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "white",
    },
  },
});
