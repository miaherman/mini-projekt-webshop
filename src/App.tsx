import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Main from "./components/main";
import PrimarySearchAppBar from "./components/primarySearchAppBar";
import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <PrimarySearchAppBar />
          <Main />
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
