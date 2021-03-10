import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Main from "./components/main";

import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import ButtonAppBar from "./components/buttonAppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
         <ButtonAppBar />
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
