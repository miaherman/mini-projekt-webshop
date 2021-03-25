import React, { ChangeEvent, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

function PaymentInfo() {
  const { customer, getPayment, payment } = useContext(CartContext);
  const [swishNumber, setSwishNumber] = React.useState(customer.mobileNumber)

  const handlePayment = (e: ChangeEvent<HTMLInputElement>) => {
      getPayment({...payment, paymentType: e.target.value })
    
  };

  useEffect(() => {
    setSwishNumber(customer.mobileNumber);
  }, [customer.mobileNumber])

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="swish"
          name="swish"
          value={payment.paymentType}
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
        {payment.paymentType === "swish" ? (
          <TextField
            key="mobilenumber"
            id="mobilenumber"
            value={swishNumber}
            onChange={(e) => setSwishNumber(e.target.value)}
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
        ) : payment.paymentType === "card" ? (
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
        ) : payment.paymentType === "invoice" ? (
          <TextField
            key="personnumber"
            type="number"
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

export default PaymentInfo;
