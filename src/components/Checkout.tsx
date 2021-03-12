import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { CartContext } from "../contexts/CartContext";

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

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <div>
          { cart.map(product => (
            <div key={product.id}> {product.title} {product.price}</div>
          )) }
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
      </Container>
    </div>
  );
}
