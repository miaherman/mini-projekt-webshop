import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Main from "./components/main";
import ButtonAppBar from "./components/buttonAppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ButtonAppBar />
        <Main />
    </ThemeProvider>
  );
}
export default App;
