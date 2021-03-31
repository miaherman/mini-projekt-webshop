import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import ButtonAppBar from "./components/buttonAppBar";
import CartProvider from "./contexts/CartContext";
import ProductView from "./components/productView";
import Main from "./components/main";
import Orderconfirmation from "./components/Orderconfirmation";
import PageAnimation from "./wrapper/PageAnimation";
import { AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  App: {
    minHeight: '100vh'
  },
}));

function App() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          <ButtonAppBar />
          <AnimatePresence exitBeforeEnter>

          <Switch location={location} key={location.key}>
              <Route exact path="/">
                <PageAnimation>
                  <Main />
                </PageAnimation>
              </Route>

              <Route path="/products/:path">
                <PageAnimation>
                  <ProductView />
                </PageAnimation>
              </Route>

              <Route path="/checkout">
                <PageAnimation>
                  <Checkout />
                </PageAnimation>
              </Route>

              <Route path="/orderconfirmation">
                <PageAnimation>
                  <Orderconfirmation />
                </PageAnimation>
              </Route>
          </Switch>
          </AnimatePresence>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
