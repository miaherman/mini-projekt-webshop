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
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CartContext } from "../contexts/CartContext";
import { products } from "../products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    margin: 0,
  },
  root: {
    margin: theme.spacing(3),
    width: 270,
  },
  media: {
    height: 420,
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

function ProductGrid() {
  const classes = useStyles();
  const { addToCart } = useContext(CartContext);

  return (
    <Grid container justify="center" className={classes.gridContainer}>
      {products.map((product) => (
        <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
          <Grid item>
            <Card className={classes.root}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${product.path}`}
              >
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
                  Lägg till
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </motion.div>
      ))}
    </Grid>
  );
}

export default ProductGrid;
