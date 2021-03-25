import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CartContext, Order, Customer, Delivery, CartItem } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";

import Cart from "./Cart";
import PaymentInfo from "./PaymentInfo";
import CustomerInfo from "./CustomerInfo";

import VerticalLinearStepper from "./stepper";

const useStyles = makeStyles((theme: any) => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    width: "100%"
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const { customer, cart, orderPrice, delivery } = useContext(CartContext);

  return (
    <div className={classes.root}>
        <Cart />
        <Container maxWidth="sm">
          <VerticalLinearStepper />

        {/* <CustomerInfo />
        <Delivery />
        <Payment /> */}

        <Button onClick={ () => completeBooking(customer, cart, orderPrice, delivery)} className={classes.textField} variant="contained">
          Bekräfta beställning
        </Button>
      </Container>
    </div>
  );
}


async function mockApi(order: Order) {        
    console.log(order)
    await timeOut()
    return true
}

async function timeOut() {
    return new Promise((resolve) => { setTimeout(resolve , 2000) })
}

async function completeBooking(customer: Customer, cart: CartItem[], orderPrice: number, delivery: Delivery) {

    const order: Order = {
        id: getRandomInt(10000, 99999),
        customer: customer,
        cart: cart,
        deliveryType: delivery.deliveryType,
        totalPrice: orderPrice + delivery.deliveryPrice
    }

    // empty cart & other info...

    const res = await mockApi(order)
    // --->
    console.log(res)
    
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
 }



