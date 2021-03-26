import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Orderconfirmation = () => {

  const { orderId } = useContext(CartContext);

  return (
    <div>
      <p>Här är ditt ordernummer: {orderId} En orderbekräftelse har skickats till din e-post med alla dina uppgifter.</p>
    </div>
  );
};

export default Orderconfirmation;
