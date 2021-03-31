import { Component, createContext } from "react";
import { Product } from "../products";

export interface Order {
  id: number;
  customer: Customer;
  cart: CartItem[];
  deliveryType?: string;
  totalPrice?: number;
}

export interface Customer {
  address?: string;
  city?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  postalCode?: string;
  email?: string;
}

export interface Payment {
  paymentType: string
}
export interface Delivery {
  deliveryType: string;
  deliveryPrice: number;
}

export interface CartItem extends Product {
  quantity: number;
}
interface State {
  cart: CartItem[];
  customer: Customer;
  orderPrice: number;
  orderId: number;
  delivery: Delivery;
  payment: Payment
}

interface ContextValue extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  emptyCart: () => void;
  createCustomer: (customer: Customer) => void;
  getOrderPrice: (cart: CartItem[]) => void;
  createOrderId: () => number;
  getDelivery: (delivery: Delivery) => void;
  getPayment: (payment: Payment) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  customer: {},
  createCustomer: () => {},
  orderPrice: 0,
  getOrderPrice: () => {},
  orderId: 0,
  createOrderId: () => 0,
  delivery: {
    deliveryType: "",
    deliveryPrice: 0,
  },
  getDelivery: () => {},
  getPayment: () => {},
  payment: {
    paymentType: 'Swish'
  }
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    customer: {},
    orderPrice: 0,
    orderId: 0,
    delivery: {
      deliveryType: "",
      deliveryPrice: 0,
    },
    payment: {
      paymentType: 'Swish'
    }
  };
  
  getOrderPrice = (cart: CartItem[]) => {
    // let sum = 0;
    // for (const product of cart) {
    //   sum + (product.price * product.quantity)
    // }
    // return sum;

    let price = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    this.setState({ orderPrice: price });

  };

  createOrderId = () => {
    const min = 11111;
    const max = 99999;
    const orderId = Math.floor(Math.random() * (max - min) + min)
    this.setState({ orderId })
    // return for convinience
    return orderId
  }

  getDelivery = (delivery: Delivery) => {

    this.setState({ delivery });
    console.log(delivery)

  };

  getPayment = (payment: Payment) => {
    this.setState({ payment });
    console.log(payment)

  };

  createCustomer = (customer: Customer) => {
    this.setState({ customer })
    console.log(customer)
  }

  emptyCart = () => {
      
    this.setState( { cart: [], customer: {}, 
      orderPrice: 0, 
      orderId: 0, 
      delivery: {
        deliveryType: "", 
        deliveryPrice: 0}, 
        payment: {
          paymentType: ""} 
        } )
  }

  addProductToCart = (product: Product) => {
    const updatedCart = [...this.state.cart];

    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    this.getOrderPrice(updatedCart)
    this.setState({ cart: updatedCart });
    console.log(updatedCart);
  };

  removeProductFromCart = (product: Product) => {
    const updatedCart = [...this.state.cart];

    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    this.getOrderPrice(updatedCart)
    this.setState({ cart: updatedCart });
    console.log(updatedCart);
    console.log(updatedItemIndex);
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          emptyCart: this.emptyCart,
          addToCart: this.addProductToCart,
          removeFromCart: this.removeProductFromCart,
          createCustomer: this.createCustomer,
          getOrderPrice: this.getOrderPrice,
          createOrderId: this.createOrderId,
          getDelivery: this.getDelivery,
          getPayment: this.getPayment,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
