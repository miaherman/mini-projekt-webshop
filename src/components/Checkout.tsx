import { useContext, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cart from "./Cart";

import VerticalLinearStepper from "./stepper";
import { CartContext } from "../contexts/CartContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export default function Checkout() {

  const classes = useStyles();

  const { cart } = useContext(CartContext);
  let cartItems = cart.reduce((a: any, b: any) => +a + +b.quantity, 0);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

if (cartItems > 0) {
  return (
    <div className={classes.root}>
      <Cart />
      <Container maxWidth="sm">
        <VerticalLinearStepper />
      </Container>
    </div>
  );
} else {
  return (
    <div className={classes.root}>
      <Cart />
    </div>
  );
}
}
