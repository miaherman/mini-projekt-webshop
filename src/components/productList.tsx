import Grid from "@material-ui/core/Grid";
import React from "react";

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
}));

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const products: Array<Product> = [
  {
    id: 1,
    image:
      "https://desenio.se/bilder/artiklar/zoom/13580_2.jpg?imgwidth=435&qt=Freddie%20Mercury%20i%20svartvitt",
    title: "Fred Mercury",
    description: "En bild på Fred",
    price: 300,
  },
  {
    id: 2,
    image:
      "https://desenio.se/bilder/artiklar/zoom/12126_2.jpg?imgwidth=435&qt=Line%20art-ansikten",
    title: "Ansikten",
    description: "Två ansikten",
    price: 400,
  },
  {
    id: 3,
    image:
      "https://desenio.se/bilder/artiklar/zoom/14196_2.jpg?imgwidth=435&qt=Grafisk%20trana",
    title: "Trana",
    description: "En trana som flyger",
    price: 500,
  },
  {
    id: 4,
    image:
      "https://desenio.se/bilder/artiklar/zoom/13293_2.jpg?imgwidth=435&qt=Valv%20av%20svarta%20linjer",
    title: "Svarta Linjer",
    description: "Lite svarta linjer",
    price: 500,
  },
  {
    id: 5,
    image:
      "https://desenio.se/bilder/artiklar/zoom/15070_2.jpg?imgwidth=435&qt=Pastellstrand",
    title: "Strand",
    description: "En strand och en himmel",
    price: 500,
  },
  {
    id: 6,
    image:
      "https://desenio.se/bilder/artiklar/zoom/11490_2.jpg?imgwidth=435&qt=Retrokamera",
    title: "Kamera",
    description: "En person håller i en kamera",
    price: 500,
  },
];

const cart: Array<Product> = [];

const addToCart = (product: Product) => {
  cart.push(product);
  console.log(cart);
};

function Item() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [activeProductTitle, setActiveProductTitle] = React.useState('')
  const [activeProductImage, setActiveProductImage] = React.useState('')
  const [activeProductDescription, setActiveProductDescription] = React.useState('')

  const handleOpen = (productTitle: string, productImage: string, productDescription: string) => {
    setOpen(true);
    setActiveProductTitle(productTitle)
    setActiveProductImage(productImage)
    setActiveProductDescription(productDescription)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="center">
      {products.map((product) => (
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea onClick={() => handleOpen(product.title, product.image, product.description)}>
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
                href=""
              >
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
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">{activeProductTitle}</h2>
                    <img src={activeProductImage} alt="" />
                    <p id="transition-modal-description">
                      {activeProductDescription}
                    </p>
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
