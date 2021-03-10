import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { products } from "../products";
import ButtonAppBar from "./buttonAppBar";

interface Props {
  productID: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ProductView(props: Props) {
  const classes = useStyles();
  console.log(products);

  return (
    <div>
      <ButtonAppBar />
      <Typography variant="h6" className={classes.title}>
        {props.productID}
      </Typography>
    </div>
  );
}
export default ProductView;
