import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import ButtonAppBar from "./components/buttonAppBar";
import CartProvider from "./contexts/CartContext";
import ProductView from "./components/productView";
import Main from "./components/main";

//import { products } from "./products";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          <ButtonAppBar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/products/:path">
              <ProductView />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;