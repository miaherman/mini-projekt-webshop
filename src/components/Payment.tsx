import React from 'react';
import TextField from "@material-ui/core/TextField";

import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@material-ui/core";

function Payment() {

    const [paymentValue, setPaymentValue] = React.useState("swish");

    const handlePayment = (event: any) => {
        setPaymentValue(event.target.value);
      };

    return(
        <div>
            <FormControl component="fieldset">
            <FormLabel component="legend">Välj betalsätt</FormLabel>
            <RadioGroup
                aria-label="swish"
                name="swish"
                value={paymentValue}
                onChange={handlePayment}
                row
            >
                <FormControlLabel
                value="swish"
                control={<Radio />}
                label="Swish"
                />
                <FormControlLabel
                value="card"
                control={<Radio />}
                label="Betalkort"
                />
                <FormControlLabel
                value="invoice"
                control={<Radio />}
                label="Faktura"
                />
            </RadioGroup>
            </FormControl>
            <form autoComplete="on">
            <TextField
                id="phone"
                label="Mobilnummer"
                required
                style={{ margin: 8 }}
                placeholder="Din mobil"
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

export default Payment;