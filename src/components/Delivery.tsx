import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@material-ui/core";
function Delivery() {

    const [deliveryValue, setDeliveryValue] = React.useState("express");


    const handleDelivery = (event: any) => {
      setDeliveryValue(event.target.value);
    };

    return (
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Välj fraktsätt</FormLabel>
            <RadioGroup
              aria-label="express"
              name="express"
              value={deliveryValue}
              onChange={handleDelivery}
              row
            >
              <FormControlLabel
                value="express"
                control={<Radio />}
                label="Express (inom 24h)"
              />
              <FormControlLabel
                value="instabox"
                control={<Radio />}
                label="Instabox (48h)"
              />
              <FormControlLabel
                value="Postnord"
                control={<Radio />}
                label="Postnord (1-2 veckor)"
              />
            </RadioGroup>
          </FormControl>
        </div>
    )
}

export default Delivery;