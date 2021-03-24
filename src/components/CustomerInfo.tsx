import React, { ChangeEvent, useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from '@material-ui/core';
import { useState } from "react";
import { CartContext, Customer } from '../contexts/CartContext';

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

function CustomerInfo() {
    const classes = useStyles();
    const { createCustomer } = useContext(CartContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [postalCodeError, setPostalCodeError] = useState("");
    const [cityError, setCityError] = useState("");
    const [mobileNumberError, setMobileNumberError] = useState("");

    const customer: Customer = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      postalCode: postalCode,
      city: city,
      mobileNumber: mobileNumber
    }

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value)
      
      if (!/^[a-öA-Ö]+$/.test(e.target.value)) {
        setFirstNameError("Var god ange endast bokstäver");
      } else {
        setFirstNameError("");
      }
    }

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value)
      
      if (!/^[a-öA-Ö]+$/.test(e.target.value)) {
        setLastNameError("Var god ange endast bokstäver");
      } else {
        setLastNameError("");
      }
    }
    
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value)
      
      if (!/^[a-öA-Ö0-9" "]+$/.test(e.target.value)) {
        setAddressError("Var god ange endast bokstäver och siffror");
      } else {
        setAddressError("");
      }
    }
   
    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPostalCode(e.target.value)
      
      if (!/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/.test(e.target.value)) {
        setPostalCodeError("Var god ange 5 siffror");
      } else {
        setPostalCodeError("");
      }
    }

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value)
      
      if (!/^[a-öA-Ö]+$/.test(e.target.value)) {
        setCityError("Var god ange endast bokstäver");
      } else {
        setCityError("");
      }
    }
    
    const handleMobileNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
      setMobileNumber(e.target.value)
      
      if (!/^[0-9]+$/.test(e.target.value)) {
        setMobileNumberError("Var god ange endast siffror");
      } else {
        setMobileNumberError("");
      }
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
              onChange={handleFirstNameChange}
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
              helperText={firstNameError}
              error={Boolean(firstNameError)}
            />
            <TextField
              onChange={handleLastNameChange}
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
              helperText={lastNameError}
              error={Boolean(lastNameError)}
            />
            <TextField
              onChange={handleAddressChange}
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
              helperText={addressError}
              error={Boolean(addressError)}
            />
            <TextField
              onChange={handlePostalCodeChange}
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
              helperText={postalCodeError}
              error={Boolean(postalCodeError)}
            />
            <TextField
              onChange={handleCityChange}
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
              helperText={cityError}
              error={Boolean(cityError)}
            />
            <TextField
                onChange={handleMobileNumberChange}
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
                helperText={mobileNumberError}
                error={Boolean(mobileNumberError)}
            />
          </form>
          <Button variant="contained" className={classes.textField} onClick={ () => createCustomer(customer)}>Gå vidare</Button>
        </div>
    )
}

export default CustomerInfo;