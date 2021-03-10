import Grid from "@material-ui/core/Grid";
import React, { useContext } from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CartContext } from "../contexts/CartContext";
import { products } from "../products";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    width: 300,
  },
  media: {
    height: 450,
  },
  title: {
    color: theme.palette.primary.main,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalImage: {
    height: 300,
    width: "auto",
  },
}));

function Item() {
  const classes = useStyles();

  // const [activeProduct, setActiveProduct] = React.useState(products[0]);

  // function checkActiveProduct(product: Product) {
  //   setActiveProduct(product)
  //   console.log(activeProduct)
  // }

  const { addToCart } = useContext(CartContext);

  return (
    <Grid container justify="center">
      {products.map((product) => (
        <Grid item>
          <Card className={classes.root}>
            <Link style={{textDecoration: 'none'}} to={`/${product.id}`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.price + " kr"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <Button
                onClick={() => addToCart(product)}
                size="small"
                color="primary"
                href=""
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Item;
