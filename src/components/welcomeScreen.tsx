import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(7),
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    height: "35rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  text: {
    textAlign: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
  }
}));

const WelcomeScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>
        Välkommen till PrintyPrint
      </Typography>
      <Typography variant="h5" component="h5" className={classes.text}>
      Exklusiva och handplockade prints från ledande konstexperter
      </Typography>
    </div>
  );
};

export default WelcomeScreen;
