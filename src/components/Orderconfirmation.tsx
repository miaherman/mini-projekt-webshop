import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    flexWrap: "wrap",
    marginTop: theme.spacing(15),
    textAlign: 'center',
    padding: '1rem'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={classes.root}>
      <h2>Tack för din beställning!</h2>
      <h3>Ordernummer: {orderId} </h3>
      <p>En orderbekräftelse har skickats till din e-post med alla uppgifter.</p>
    </div>
  );
};

export default Orderconfirmation;
