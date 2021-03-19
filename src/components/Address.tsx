import React, { useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core';
import { useState } from "react";
import { CartContext } from '../contexts/CartContext';


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
    const { createCustomer } = useContext(CartContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const customer: any = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      postalCode: postalCode,
      city: city,
      mobileNumber: mobileNumber
    }
    
    // console.log(firstName)
    // console.log(lastName)
    // console.log(address)
    // console.log(postalCode)
    // console.log(city)
    // console.log(mobileNumber)
    
    return(
        <div className={classes.infoContainer}>
          Fyll i dina uppgifter
          <form autoComplete="on">
            <TextField             
              onChange={e => setFirstName(e.target.value)}
              id="firstname"
              label="Förnamn"
              required
              style={{ margin: 8 }}
              placeholder="Förnamn"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
            <TextField
              onChange={e => setLastName(e.target.value)}
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
              onChange={e => setAddress(e.target.value)}
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
              onChange={e => setPostalCode(e.target.value)}
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
              onChange={e => setCity(e.target.value)}
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
                onChange={e => setMobileNumber(e.target.value)}
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
          <button onClick={ () => createCustomer(customer)}>SKAPA KUND</button>
        </div>
    )
}

export default Address;