import React, { ChangeEvent, useContext } from 'react';
import {
  Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    makeStyles,
    Radio,
    RadioGroup,
  } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

  const useStyles = makeStyles((theme: any) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
  }));

function DeliveryInfo() {
    const { delivery, getDelivery } = useContext(CartContext);

    const handleDelivery = (e: ChangeEvent<HTMLInputElement>) => {

      if (e.target.value === 'express') {
        getDelivery({ ...delivery, deliveryPrice: 100, deliveryType: e.target.value })
      } else if (e.target.value === 'instabox') {
        getDelivery({ ...delivery, deliveryPrice: 50, deliveryType: e.target.value })
      } else {
        getDelivery({ ...delivery, deliveryPrice: 0, deliveryType: e.target.value })
      }
    };

    let current_datetime = new Date()

    let express = new Date(current_datetime)
    express.setDate(express.getDate() + 1)
    let formatted_express = express.getDate() + "-" + (express.getMonth() + 1) + "-" + express.getFullYear();

    let instaBox = new Date(current_datetime)
    instaBox.setDate(express.getDate() + 2)
    let formatted_instaBox = instaBox.getDate() + "-" + (instaBox.getMonth() + 1) + "-" + instaBox.getFullYear();

    let postnord = new Date(current_datetime)
    postnord.setDate(express.getDate() + 7)
    let formatted_postnord = postnord.getDate() + "-" + (postnord.getMonth() + 1) + "-" + express.getFullYear();
    
    return (
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="express"
              name="express"
              //value={delivery.deliveryType}
              onChange={handleDelivery}
              row
            >
              <FormControlLabel
                value="express"
                control={<Radio />}
                label={"Express (24h, levereras den, " + formatted_express + ") + 100kr"}
              />
              <FormControlLabel
                value="instabox"
                control={<Radio />}
                label={"Instabox (48h, levereras den, " + formatted_instaBox + ") + 50kr"}
              />
              <FormControlLabel
                value="postnord"
                control={<Radio />}
                label={"Postnord (ca 1 vecka, levereras, " + formatted_postnord  + ") Fri frakt"}
              />
            </RadioGroup>
          </FormControl>
        </div>
    )
}

export default DeliveryInfo;