import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

import {
  CartContext,
  Order,
} from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";

import VerticalLinearStepper from "./stepper";
// import LoadingButton from '@material-ui/lab/LoadingButton';

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing(1),
    width: "97%",
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const { createOrderId, customer, cart, orderPrice, delivery } = useContext(CartContext);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const [pending, setPending] = React.useState(false);
  let history = useHistory();

  function navigateToNextPage() {
    history.push("/orderconfirmation");
}

  const completeBooking = async () => {  
    const order: Order = {
      id: createOrderId(),
      customer: customer,
      cart: cart,
      deliveryType: delivery.deliveryType,
      totalPrice: orderPrice + delivery.deliveryPrice,
    };
    // setPending(true)
    
    const res = await mockApi(order);
    navigateToNextPage();
  }

  return (
    <div className={classes.root}>
      <Cart />
      <Container maxWidth="sm">
        <VerticalLinearStepper />

        <Button
          onClick={completeBooking}
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Bekräfta beställning
        </Button>

      </Container>
    </div>
  );
}

async function mockApi(order: Order) {
  console.log(order);
  await timeOut();
  return true;
}

async function timeOut() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

// function getRandomInt(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
