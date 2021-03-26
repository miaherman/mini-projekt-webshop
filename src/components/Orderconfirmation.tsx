import { makeStyles } from '@material-ui/core';
import { findByLabelText } from '@testing-library/dom';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    flexWrap: "wrap",
    marginTop: '10rem'
  },
}));

const Orderconfirmation = () => {
  const classes = useStyles();

  const { orderId: orderIfFromCart, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(orderIfFromCart);

  useEffect(() => {
    if (orderId) {
      emptyCart()
    }
  }, [orderId])

  return (
    <div className={classes.root}>
      <h2>Här är ditt ordernummer: {orderId} </h2>
      <p>En orderbekräftelse har skickats till din e-post med alla dina uppgifter.</p>
    </div>
  );
};

export default Orderconfirmation;
