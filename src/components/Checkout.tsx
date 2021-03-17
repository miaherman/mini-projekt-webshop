import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CartContext } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";


import Cart from "./Cart";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Address from "./Address";

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

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Cart />
        <Address />
        <Payment />
        <Delivery />
        <Button className={classes.textField} variant="contained">
          Bekräfta beställning
        </Button>
      </Container>
    </div>
  );
}
