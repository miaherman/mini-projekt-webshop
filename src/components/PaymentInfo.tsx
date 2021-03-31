import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

interface Props {
  onErrorChange: (error: boolean) => void;
  onErrorChange2: (error: boolean) => void;
  onErrorChange3: (error: boolean) => void;
}

function PaymentInfo({ onErrorChange, onErrorChange2, onErrorChange3 }: Props) {
  const { customer, getPayment, payment } = useContext(CartContext);
  const [swishNumber, setSwishNumber] = React.useState(customer.mobileNumber);

  const [cardNumber, setCardNumber] = React.useState('');
  const [cardDate, setCardDate] = React.useState('');
  const [cardCvc, setCardCvc] = React.useState('');
  const [personalId, setPersonalId] = React.useState('');
  
  const [swishError, setSwishError] = useState("");
  
  const [cardError, setCardError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const [invoiceError, setInvoiceError] = useState("");

  const handlePayment = (e: ChangeEvent<HTMLInputElement>) => {
    getPayment({ ...payment, paymentType: e.target.value });
  };

  useEffect(() => {

    if(payment.paymentType === 'Swish') {
      const hasError = Boolean(swishError)
      const hasMissingInfo = !customer.mobileNumber 
      onErrorChange(hasError || hasMissingInfo)
    } else if (payment.paymentType === 'Betalkort') {
      const hasError = Boolean(cardError || dateError || cvcError)
      const hasMissingInfo = !cardNumber || !cardDate || !cardCvc
      onErrorChange2(hasError || hasMissingInfo)
    } else if (payment.paymentType === 'Faktura') {
      const hasError = Boolean(invoiceError)
      const hasMissingInfo = !personalId
      onErrorChange3(hasError || hasMissingInfo)
    }
  }, [customer.mobileNumber, swishError, cardError, dateError, cvcError, invoiceError, cardNumber, cardDate, cardCvc, personalId]);
  
  const handleSwishChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwishNumber(e.target.value)
    
    if (!/^[0-9]+$/.test(e.target.value)) {
      setSwishError("Var god ange endast siffror");
    } else {
      setSwishError("");
    }
  }

  const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value)
    
    if (!/^[0-9]+$/.test(e.target.value)) {
      setCardError("Var god ange endast siffror");
    } else {
      setCardError("");
    }
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardDate(e.target.value)
    
    if (!/^[0-9]+$/.test(e.target.value)) {
      setDateError("Var god ange endast siffror");
    } else {
      setDateError("");
    }
  } 

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCvc(e.target.value)
    
    if (!/^[0-9]+$/.test(e.target.value)) {
      setCvcError("Var god ange endast siffror");
    } else {
      setCvcError("");
    }
  }

  const handleInvoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalId(e.target.value)
    
    if (!/^[0-9]+$/.test(e.target.value)) {
      setInvoiceError("Var god ange endast siffror");
    } else {
      setInvoiceError("");
    }
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="payment"
          name="payment"
          value={payment.paymentType}
          onChange={handlePayment}
          row
        >
          <FormControlLabel 
            value="Swish" 
            control={<Radio />} 
            label="Swish" />
          <FormControlLabel
            value="Betalkort"
            control={<Radio />}
            label="Betalkort"
          />
          <FormControlLabel
            value="Faktura"
            control={<Radio />}
            label="Faktura"
          />
        </RadioGroup>
      </FormControl>
      <div>
        {payment.paymentType === "Swish" || payment.paymentType === "" ? (
          <TextField
            key="mobilenumber"
            id="mobilenumber"
            value={swishNumber}
            onChange={handleSwishChange}
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
            helperText={swishError}
            error={Boolean(swishError)}
          />
        ) : payment.paymentType === "Betalkort" ? (
          <form autoComplete="on">
            <TextField
              id="frmCCNum"
              label="Kortnummer"
              onChange={handleCardChange}
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
              helperText={cardError}
              error={Boolean(cardError)}
            />
            <TextField
              id="frmCCExp"
              label="Datum"
              onChange={handleDateChange}
              autoComplete="cc-exp"
              required
              style={{ margin: 8 }}
              placeholder="MM/ÅÅ"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText={dateError}
              error={Boolean(dateError)}
            />
            <TextField
              type="number"
              id="frmCCCVC"
              label="CVV/CVC"
              onChange={handleCvcChange}
              autoComplete="cc-csc"
              required
              style={{ margin: 8 }}
              placeholder="CVV / CVC"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText={cvcError}
            error={Boolean(cvcError)}
            />
          </form>
        ) : payment.paymentType === "Faktura" ? (
          <TextField
            key="personnumber"
            id="personalnumbers"
            label="Personnummer"
            onChange={handleInvoiceChange}
            required
            fullWidth
            style={{ margin: 8 }}
            placeholder="ÅÅÅÅMMDD-XXXX"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            helperText={invoiceError}
            error={Boolean(invoiceError)}
          />
        ) : (
          <div></div>
        )
        }
      </div>
    </div>
  );
}

export default PaymentInfo;
