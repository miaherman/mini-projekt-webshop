import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CartContext, Order } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";

import Cart from "./Cart";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Customer from "./Customer";


const useStyles = makeStyles((theme: any) => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const { customer, cart } = useContext(CartContext);

  return (
    <div className={classes.root}>
        <Cart />
        <Container maxWidth="sm">
        <Customer />
        <Delivery />
        <Payment />
        <Button onClick={ () => completeBooking(customer, cart)} className={classes.textField} variant="contained">
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

async function completeBooking(customer: any, cart: any) {

    const order: Order = {
        id: 482623,
        customer: customer,
        cart: cart
    }

    // empty cart & other info...

    const res = await mockApi(order)
    // --->
    console.log(res)
    
}

function randomOrderId() {

}