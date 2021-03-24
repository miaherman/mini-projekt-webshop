import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";



function Payment() {
  const { customer } = useContext(CartContext);
  const [paymentValue, setPaymentValue] = React.useState("");

  const handlePayment = (event: any) => {
    setPaymentValue(event.target.value);
  };

  return (
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
          <FormControlLabel value="swish" control={<Radio />} label="Swish" />
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
      <div>
        {paymentValue === "swish" ? (
          <TextField
            id="mobilenumber"
            value={customer.mobileNumber}
            type="number"
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
        ) : paymentValue === "card" ? (
          <form autoComplete="on">
            <TextField
              id="frmCCNum"
              type="number"
              label="Kortnummer"
              required
              autoComplete="cc-number"
              style={{ margin: 8 }}
              placeholder="0000 1111 2222 3333"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="frmCCExp"
              type="number"
              label="Datum"
              autoComplete="cc-exp"
              required
              style={{ margin: 8 }}
              placeholder="MM/ÅÅ"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              type="number"
              id="frmCCCVC"
              label="CVV/CVC"
              autoComplete="cc-csc"
              required
              style={{ margin: 8 }}
              placeholder="CVV / CVC"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </form>
        ) : paymentValue === "invoice" ? (
          <TextField
            type="number"
            value=""
            id="personalnumbers"
            label="Personnummer"
            required
            fullWidth
            style={{ margin: 8 }}
            placeholder="ÅÅÅÅMMDD-XXXX"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Payment;
