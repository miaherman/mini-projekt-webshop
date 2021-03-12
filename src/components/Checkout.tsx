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

  paymentOptions: {
    display: "flex",
    flexDirection: "row",
  }
}));
export default function Checkout() {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

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
            <FormLabel component="legend">Välj fraktsätt</FormLabel>
            <RadioGroup aria-label="express" name="express" value={"hej"} className={classes.paymentOptions}>
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
