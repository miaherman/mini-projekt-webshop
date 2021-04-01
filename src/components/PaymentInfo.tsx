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
  const { customer, getPayment, payment, cardDetails, invoice, getInvoiceDetails, getCardDetails } = useContext(CartContext);
  const [swishNumber, setSwishNumber] = useState(customer.mobileNumber);

  const [swishError, setSwishError] = useState("");

  const [cardError, setCardError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const [invoiceError, setInvoiceError] = useState("");

  const handlePayment = (e: ChangeEvent<HTMLInputElement>) => {
    getPayment({ ...payment, paymentType: e.target.value });
  };

  useEffect(() => {
    if (payment.paymentType === "Swish") {
      const hasError = Boolean(swishError);
      const hasMissingInfo = !customer.mobileNumber;
      onErrorChange(hasError || hasMissingInfo);
    } else if (payment.paymentType === "Betalkort") {
      const hasError = Boolean(cardError || dateError || cvcError);
      const hasMissingInfo = !cardDetails.cardNumber || !cardDetails.cardDate || !cardDetails.cardCvc;
      onErrorChange2(hasError || hasMissingInfo);
    } else if (payment.paymentType === "Faktura") {
      const hasError = Boolean(invoiceError);
      const hasMissingInfo = !invoice;
      onErrorChange3(hasError || hasMissingInfo);
    }
  }, [
    customer.mobileNumber,
    swishError,
    cardError,
    dateError,
    cvcError,
    invoiceError,
    cardDetails.cardNumber,
    cardDetails.cardDate,
    cardDetails.cardCvc,
    invoice,
    onErrorChange,
    onErrorChange2,
    onErrorChange3,
    payment.paymentType
  ]);

  const handleSwishChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwishNumber(e.target.value);

    if (!/^[0-9]+$/.test(e.target.value)) {
      setSwishError("Var god ange endast siffror");
    } else {
      setSwishError("");
    }
  };

  const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    getCardDetails({ ...cardDetails, cardNumber: e.target.value })


    if (!/^[0-9]+$/.test(e.target.value)) {
      setCardError("Var god ange endast siffror");
    } else {
      setCardError("");
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    getCardDetails({ ...cardDetails, cardDate: e.target.value })

    if (!/^[0-9]+$/.test(e.target.value)) {
      setDateError("Var god ange endast siffror");
    } else {
      setDateError("");
    }
  };

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    getCardDetails({ ...cardDetails, cardCvc: e.target.value })

    if (!/^[0-9]+$/.test(e.target.value)) {
      setCvcError("Var god ange endast siffror");
    } else {
      setCvcError("");
    }
  };

  const handleInvoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    getInvoiceDetails(e.target.value)

    if (!/^[0-9]+$/.test(e.target.value)) {
      setInvoiceError("Var god ange endast siffror");
    } else {
      setInvoiceError("");
    }
  };

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
          <FormControlLabel value="Swish" control={<Radio />} label="Swish" />
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
        {payment.paymentType === "Swish" ? (
          <form autoComplete="on">
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
          </form>
        ) : payment.paymentType === "Betalkort" ? (
          <form autoComplete="on">
            <TextField
              id="frmCCNum"
              label="Kortnummer"
              value={cardDetails.cardNumber}
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
              value={cardDetails.cardDate}
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
              id="frmCCCVC"
              label="CVV/CVC"
              value={cardDetails.cardCvc}
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
          <form autoComplete="on">
            <TextField
              key="personnumber"
              id="personalnumbers"
              label="Personnummer"
              value={invoice}
              onChange={handleInvoiceChange}
              required
              fullWidth
              style={{ margin: 8 }}
              placeholder="ÅÅÅÅMMDDXXXX"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText={invoiceError}
              error={Boolean(invoiceError)}
            />
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default PaymentInfo;
