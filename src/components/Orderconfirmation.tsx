import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Orderconfirmation = () => {

const { cart, customer, delivery } = useContext(CartContext);

    return (
        <div>
            <h1>Tack för din beställning: </h1>{customer.firstName}&nbsp;
            {customer.lastName}&nbsp;

            {delivery.deliveryType}
            {delivery.deliveryPrice}
            Ditt ordernummer är: 
        </div>
    );
};

export default Orderconfirmation;