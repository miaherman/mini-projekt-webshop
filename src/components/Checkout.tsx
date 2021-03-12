import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { CartContext } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

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
  infoContainer: {
    marginTop: "10rem",
    justifyContent: "center",
    textAlign: "center",
  },
}));
export default function Checkout() {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

  const [paymentValue, setPaymentValue] = React.useState("swish");
  const [deliveryValue, setDeliveryValue] = React.useState("express");

  const handlePayment = (event: any) => {
    setPaymentValue(event.target.value);
  };

  const handleDelivery = (event: any) => {
    setDeliveryValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              {" "}
              {product.title} {product.price}
            </div>
          ))}
        </div>
        <div className={classes.infoContainer}>
          Fyll i dina uppgifter
          <form autoComplete="on">
            <TextField
              id="firstname"
              label="Förnamn"
              required
              style={{ margin: 8 }}
              placeholder="MAJL"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="lastname"
              label="Efternamn"
              style={{ margin: 8 }}
              placeholder="MAJLSSON"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="address"
              required
              label="Adress"
              style={{ margin: 8 }}
              placeholder="MAJLSSONGATAN"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="postal-code"
              label="Postnummer"
              required
              style={{ margin: 8 }}
              placeholder="Postnummer"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="city"
              label="Postnummer"
              required
              style={{ margin: 8 }}
              placeholder="Stad"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <Button variant="contained">Bekräfta beställning</Button>
          </form>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Välj betalsätt</FormLabel>
            <RadioGroup
              aria-label="swish"
              name="swish"
              value={paymentValue}
              onChange={handlePayment}
              row>
                <FormControlLabel
                value="swish"
                control={<Radio />}
                label="Swish"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Betalkort"
              />
              <FormControlLabel
                value="invoice"
                control={<Radio />}
                label="Faktura"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Välj fraktsätt</FormLabel>
            <RadioGroup
              aria-label="express"
              name="express"
              value={deliveryValue}
              onChange={handleDelivery}
              row>
              <FormControlLabel
                value="express"
                control={<Radio />}
                label="Express (inom 24h)"
              />
              <FormControlLabel
                value="instabox"
                control={<Radio />}
                label="Instabox (48h)"
              />
              <FormControlLabel
                value="Postnord"
                control={<Radio />}
                label="Postnord (1-2 veckor)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Container>
    </div>
  );
}
