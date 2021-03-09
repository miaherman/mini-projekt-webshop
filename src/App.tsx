import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Main from "./components/main";
import PrimarySearchAppBar from "./components/primarySearchAppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Main />
    </ThemeProvider>
  );
}
export default App;
