import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Orderinfo = () => {
  const { cart, orderPrice, delivery, customer, payment } = useContext(
    CartContext
  );

  return (
    <div>
      <h1>Kontrollera din beställning </h1>

      <div>
        <h3>Kunduppgifter:</h3>
        <p>
          {customer.firstName}&nbsp;{customer.lastName}
        </p>
        <p>{customer.address}</p>
        <p>{customer.postalCode}</p>
        <p>{customer.city}</p>
        <p>{customer.mobileNumber}</p>
        <p>{customer.email}</p>
      </div>

      <div>
        <h3>Leveransuppgifter:</h3>
        <p>{delivery.deliveryType}</p>
        <p>Pris: {delivery.deliveryPrice} kr</p>
      </div>

      <div>
        <h3>Betalningsuppgifter:</h3>
        <p>{payment.paymentType}</p>
      </div>

      <h3>Produkter:</h3>
      {cart.map((product) => (
        <div key={product.id}>
          <p>
            {product.title} {product.quantity}&nbsp;st
          </p>
        </div>
      ))}
      <p>
        Totalt pris (inkl. frakt): {orderPrice + delivery.deliveryPrice}&nbsp;kr
      </p>
    </div>
  );
};

export default Orderinfo;
