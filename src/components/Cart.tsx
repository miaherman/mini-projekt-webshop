import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CartContext } from "../contexts/CartContext";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { CardActions, IconButton, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1),
    width: 180,
  },
  media: {
    height: 220,
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Cart() {
  const classes = useStyles();
  const { orderPrice, cart, addToCart, removeFromCart, removeAllFromCart } = useContext(CartContext);

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{textAlign: 'center'}}>Din kundvagn</h2>
      {cart.length === 0 ? (
        <p style={{textAlign: 'center'}}>Inga varor</p>
      ) : (
        <div className={classes.flex}>
          {cart.map((product) => (
            <div key={product.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/products/${product.path}`}
                  >
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title={product.title}
                    />
                  </Link>

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {"Pris: " + product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {"Antal: " + product.quantity}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton
                    onClick={() => addToCart(product)}
                    aria-label=""
                    color="inherit"
                  >
                    <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => removeFromCart(product)}
                    aria-label=""
                    color="inherit"
                  >
                    <RemoveCircleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => removeAllFromCart(product)}
                    aria-label=""
                    color="inherit"
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      )}

      <div style={{textAlign: 'center'}}>
        <h2>Totalt pris(ex frakt):</h2>
        <h3>{orderPrice} kr</h3>
      </div>
    </div>
  );
}

export default Cart;
