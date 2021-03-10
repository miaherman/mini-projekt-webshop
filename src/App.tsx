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
import Item from "./components/item";

import { products } from "./products";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          <Switch>
            <Route exact path="/">
              <ButtonAppBar />
              <Item />
            </Route>


            <Route path="/1">
              <ProductView productID={products[0].id} />
            </Route>
            <Route path="/2">
              <ProductView productID={products[1].id} />
            </Route>
            <Route path="/3">
              <ProductView productID={products[2].id} />
            </Route>
            <Route path="/4">
              <ProductView productID={products[3].id} />
            </Route>
            <Route path="/5">
              <ProductView productID={products[4].id} />
            </Route>
            <Route path="/6">
              <ProductView productID={products[5].id} />
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
