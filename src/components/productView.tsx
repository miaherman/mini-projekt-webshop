import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { Product, products } from "../products";

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

function ProductView() {
  const classes = useStyles();
  const { addToCart } = useContext(CartContext);
  
  const match = useRouteMatch<{ path: string }>();
  const product = products.find(p => p.path === match.params.path);

  if (!product) {
    return <p>Produkten du letar efter finns inte.</p>
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {product.title}
      </Typography>
      <img className={classes.image} src={product.image} alt={product.description} />
      <Typography variant="h6" className={classes.title}>
        {product.description}
      </Typography>
      <Typography variant="h6" className={classes.title}>
        {product.price + ' kr'}
      </Typography>
      <Button
        onClick={() => addToCart(product)}
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
