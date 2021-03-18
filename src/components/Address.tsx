import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    root: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
    infoContainer: {
      marginTop: "10rem",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

function Address() {
    const classes = useStyles();
    return(
        <div className={classes.infoContainer}>
          Fyll i dina uppgifter
          <form autoComplete="on">
            <TextField
              id="firstname"
              label="Förnamn"
              required
              style={{ margin: 8 }}
              placeholder="Förnamn"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="lastname"
              label="Efternamn"
              style={{ margin: 8 }}
              placeholder="Efternamn"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="address"
              required
              label="Adress"
              style={{ margin: 8 }}
              placeholder="Adress"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="postal-code"
              label="Postnummer"
              required
              style={{ margin: 8 }}
              placeholder="Postnummer"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="city"
              label="Stad"
              required
              style={{ margin: 8 }}
              placeholder="Stad"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
                id="mobilenumber"
                label="Mobilnummer"
                required
                style={{ margin: 8 }}
                placeholder="07X XXXXXXX"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
            />
          </form>
        </div>
    )
}

export default Address;