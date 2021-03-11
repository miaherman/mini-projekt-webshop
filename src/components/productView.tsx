import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../products";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
  product: Product;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  image: {
    width: '25rem',
    height: 'auto'
  }
}));

function ProductView(props: Props) {
  const classes = useStyles();
  const { addToCart } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {props.title}
      </Typography>
      <img className={classes.image} src={props.image} alt={props.description} />
      <Typography variant="h6" className={classes.title}>
        {props.description}
      </Typography>
      <Typography variant="h6" className={classes.title}>
        {props.price + ' kr'}
      </Typography>
      <Button
        onClick={() => addToCart(props.product)}
        size="small"
        color="primary"
        href=""
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductView;
