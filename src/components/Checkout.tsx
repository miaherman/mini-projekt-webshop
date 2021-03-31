import { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cart from "./Cart";

import VerticalLinearStepper from "./stepper";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export default function Checkout() {

  const classes = useStyles();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={classes.root}>
      <Cart />
      <Container maxWidth="sm">
        <VerticalLinearStepper />
      </Container>
    </div>
  );
}
