import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: { 
      main: "#000" },
    secondary: { 
      main: "#D8BFD8" }
  },
});

theme = responsiveFontSizes(theme);
export default theme;
