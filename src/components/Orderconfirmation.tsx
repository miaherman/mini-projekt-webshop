import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const Orderconfirmation = () => {

  const { orderId: orderIfFromCart, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(orderIfFromCart);

  useEffect(() => {
    if (orderId) {
      emptyCart()
    }
  }, [orderId])

  return (
    <div>
      <p>Här är ditt ordernummer: {orderId} En orderbekräftelse har skickats till din e-post med alla dina uppgifter.</p>
    </div>
  );
};

export default Orderconfirmation;
