import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

const Orderconfirmation = () => {
  const { cart, orderPrice, delivery, customer } = useContext(CartContext);

  return (
    <div>
      <h1>Kontrollera din beställning </h1>
      {customer.firstName}&nbsp;
      {customer.lastName}&nbsp;
      {delivery.deliveryType}&nbsp;
      {delivery.deliveryPrice} kr
      {cart.map((product) => (
        <div>
          <span>{product.title}&nbsp;</span>
          {/* <span>{product.price}</span> */}
          <span>{product.quantity}&nbsp;st</span>
        </div>
        
      ))}
      <span>TOTALT: {orderPrice + delivery.deliveryPrice}&nbsp;kr</span>
      
    </div>
  );
};

export default Orderconfirmation;
