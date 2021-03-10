import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
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
    </div>
  );
}

export default ProductView;
