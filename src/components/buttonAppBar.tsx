import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, Theme } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
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

export default function ButtonAppBar() {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link style={{ color: "inherit" }} to="/">
            <IconButton
              edge="start"
              className="homeButton"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            PrintyPrint
          </Typography>
          <Link style={{ color: "inherit" }} to='/checkout'>
            <IconButton aria-label="" color="inherit">
              <Badge badgeContent={cart.reduce((a: any, b: any) => +a + +b.quantity, 0)} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
