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
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

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
          <h2>Din kundvagn</h2>
          {cart.length === 0 ? (
            <p>Inga varor</p>
          ) : (
            <div>
              {" "}
              {cart.map((product: any) => (
                <div key={product.id}>
                  {product.title + " " + product.price + " " + product.quantity}
                  <button onClick={() => addToCart(product)}>+</button>
                  <button onClick={() => removeFromCart(product)}>-</button>
                </div>
              ))}
              <h3>Totalt pris:</h3>
              <div>
                {cart.reduce(
                  (a: any, b: any) => a +(b.price * b.quantity),
                  0
                )}
              </div>
            </div>
          )}
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
              row
            >
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
          <form autoComplete="on">
            <TextField
              id="phone"
              label="Mobilnummer"
              required
              style={{ margin: 8 }}
              placeholder="Din mobil"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </form>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Välj fraktsätt</FormLabel>
            <RadioGroup
              aria-label="express"
              name="express"
              value={deliveryValue}
              onChange={handleDelivery}
              row
            >
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
        <Button className={classes.textField} variant="contained">
          Bekräfta beställning
        </Button>
      </Container>
    </div>
  );
}
