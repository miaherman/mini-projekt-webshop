import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

import {
  CartContext,
  Order,
  Customer,
  Delivery,
  CartItem,
  Payment
} from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";

import VerticalLinearStepper from "./stepper";
import { LoadingButton } from '@material-ui/lab';

const useStyles = makeStyles((theme: any) => ({
  root: {
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
  const { emptyCart, createOrderId, customer, cart, orderPrice, orderId, delivery, payment } = useContext(CartContext);
  const [pending, setPending] = React.useState(false);
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
    setPending(true)
    
    const res = await mockApi(order);
    navigateToNextPage();
  }

  return (
    <div className={classes.root}>
      <Cart />
      <Container maxWidth="sm">
        <VerticalLinearStepper />

        <LoadingButton
          pending={pending}
          onClick={completeBooking}
          className={classes.button}
          variant="contained"
        >
          Bekräfta beställning
        </LoadingButton>
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

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
