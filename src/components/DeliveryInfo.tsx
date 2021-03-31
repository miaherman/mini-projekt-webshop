import React, { ChangeEvent, useContext } from 'react';
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
  } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

function DeliveryInfo() {
    const { delivery, getDelivery } = useContext(CartContext);

    const handleDelivery = (e: ChangeEvent<HTMLInputElement>) => {

      if (e.target.value === 'Express') {
        getDelivery({ ...delivery, deliveryPrice: 100, deliveryType: e.target.value })
      } else if (e.target.value === 'Instabox') {
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
              aria-label="delivery"
              name="delivery"
              value={delivery.deliveryType}
              onChange={handleDelivery}
              row
            >
              <FormControlLabel
                value="Express"
                control={<Radio />}
                label={"Express (24h, levereras " + formatted_express + ") + 100kr"}
              />
              <FormControlLabel
                value="Instabox"
                control={<Radio />}
                label={"Instabox (48h, levereras " + formatted_instaBox + ") + 50kr"}
              />
              <FormControlLabel
                value="Postnord"
                control={<Radio />}
                label={"Postnord (ca 1 vecka, levereras " + formatted_postnord  + ") Fri frakt"}
              />
            </RadioGroup>
          </FormControl>
        </div>
    )
}

export default DeliveryInfo;