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
  Modal,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";

import { CartContext } from "../contexts/CartContext";
import { products } from "../products";

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
    width: "auto"
  }
}));


function Item() {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [activeProductTitle, setActiveProductTitle] = React.useState("");
  const [activeProductImage, setActiveProductImage] = React.useState("");
  const [
    activeProductDescription,
    setActiveProductDescription,
  ] = React.useState("");

  const { addToCart } = useContext(CartContext);
  
  const handleOpen = (
    productTitle: string,
    productImage: string,
    productDescription: string
  ) => {
    setOpen(true);
    setActiveProductTitle(productTitle);
    setActiveProductImage(productImage);
    setActiveProductDescription(productDescription);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="center">
      {products.map((product) => (
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea
              onClick={() =>
                handleOpen(product.title, product.image, product.description)
              }>
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
                  className={classes.title}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.price + " kr"}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => addToCart(product)}
                size="small"
                color="primary"
                href="">
                Add to cart
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}>
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">{activeProductTitle}</h2>
                    <img className={classes.modalImage} src={activeProductImage} alt="" />
                    <p id="transition-modal-description">
                      {activeProductDescription}
                    </p>
                    <Button
                      onClick={() => addToCart(product)}
                      size="small"
                      color="primary"
                      href="">
                      Add to cart
                    </Button>
                  </div>
                </Fade>
              </Modal>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Item;
