import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CartContext } from "../contexts/CartContext";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { IconButton } from "@material-ui/core";
//import { products } from "./products";

const useStyles = makeStyles((theme: any) => ({
root: {
    
}
  }));

function Cart() {

    const classes = useStyles();
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
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
                  <IconButton onClick={() => addToCart(product)} aria-label="" color="inherit">
                    <AddCircleOutlineOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => removeFromCart(product)} aria-label="" color="inherit">
                    <RemoveCircleOutlineOutlinedIcon />
                </IconButton>
                </div>
              ))}
              <h3>Totalt pris:</h3>
              <div>
                {cart.reduce(
                  (a: any, b: any) => a +(b.price * b.quantity),
                  0
                )} kr
              </div>
            </div>
          )}
        </div>
  );
}

export default Cart;