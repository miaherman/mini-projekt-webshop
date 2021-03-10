import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

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

export default function ButtonAppBar() {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Link style={{color: "inherit"}} to="/">
            <IconButton
              edge="start"
              className="homeButton"
              color="inherit"
              aria-label="menu">
              <HomeIcon />
            </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              Prints
            </Typography>
            <Button color="inherit">Login</Button>
            <Link style={{color: "inherit"}} to="./checkout">
                <IconButton aria-label="" color="inherit">
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      )
}