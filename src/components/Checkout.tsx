import React, { Component } from "react";
import ButtonAppBar from "./buttonAppBar";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

  const useStyles = makeStyles((theme: any) => ({
      root: {
        justifyContent: 'center',
        flexWrap: 'wrap',

      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
      },

      infoContainer: {
        marginTop: '10rem',
        justifyContent: 'center',
        textAlign: 'center',       
      }
    })
  );
export default function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <><ButtonAppBar/></>
     <Container maxWidth="sm">
       <div className={classes.infoContainer}>Fyll i dina uppgifter</div>
        <div>
          <TextField
            id="outlined-full-width"
            label="Förnamn"
            style={{ margin: 8 }}
            placeholder="MAJL"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Efternamn"
            style={{ margin: 8 }}
            placeholder="MAJLSSON"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Adress"
            style={{ margin: 8 }}
            placeholder="MAJLSSONGATAN"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        </Container>
    </div>
    );
  }