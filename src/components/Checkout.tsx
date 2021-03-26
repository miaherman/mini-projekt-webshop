import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
import { Link } from "react-router-dom";

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
  const { emptyCart, getOrderId, customer, cart, orderPrice, orderId, delivery, payment } = useContext(CartContext);

  async function completeBooking(
    customer: Customer,
    cart: CartItem[],
    orderPrice: number,
    delivery: Delivery,
    payment: Payment,
    orderId: number
  ) {

    getOrderId(Math.floor(Math.random() * (99999 - 10000) + 10000));

    const order: Order = {
      id: orderId,
      customer: customer,
      cart: cart,
      deliveryType: delivery.deliveryType,
      totalPrice: orderPrice + delivery.deliveryPrice,
    };
  
    // emptyCart();
  
    const res = await mockApi(order);
    // --->
    console.log(res);
  }

  return (
    <div className={classes.root}>
      <Cart />
      <Container maxWidth="sm">
        <VerticalLinearStepper />

        <Link to="/orderconfirmation">
          <Button
            onClick={() =>
              completeBooking(customer, cart, orderPrice, delivery, payment, orderId)
            }
            className={classes.button}
            variant="contained"
          >
            Bekräfta beställning
          </Button>
        </Link>
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


