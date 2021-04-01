import { Component, createContext } from "react";
import { Product } from "../products";

export interface Order {
  id: number;
  customer: Customer;
  cart: CartItem[];
  deliveryType: string;
  paymentType: string;
  totalPrice: number;
}

export interface Customer {
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  postalCode: string;
  email: string;
}

export interface Payment {
  paymentType: string;
}
export interface Delivery {
  deliveryType: string;
  deliveryPrice: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Card {
  cardNumber: string;
  cardDate: string;
  cardCvc: string;
}
interface State {
  cart: CartItem[];
  customer: Customer;
  orderPrice: number;
  orderId: number;
  delivery: Delivery;
  payment: Payment;
  invoice: string;
  cardDetails: Card;
}

interface ContextValue extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeAllFromCart: (product: Product) => void;
  emptyCart: () => void;
  createCustomer: (customer: Customer) => void;
  getOrderPrice: (cart: CartItem[]) => void;
  createOrderId: () => number;
  getDelivery: (delivery: Delivery) => void;
  getPayment: (payment: Payment) => void;
  getCardDetails: (card: Card) => void;
  getInvoiceDetails: (invoice: string) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  removeAllFromCart: () => {},
  emptyCart: () => {},
  customer: {
    address: "",
    city: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    postalCode: "",
    email: "",
  },
  createCustomer: () => {},
  orderPrice: 0,
  getOrderPrice: () => {},
  orderId: 0,
  createOrderId: () => 0,
  delivery: {
    deliveryType: "Express",
    deliveryPrice: 100,
  },
  getDelivery: () => {},
  getPayment: () => {},
  payment: {
    paymentType: "Swish",
  },
  getCardDetails: () => {},
  cardDetails: {
    cardCvc: "",
    cardNumber: "",
    cardDate: "",
  },
  getInvoiceDetails: () => {},
  invoice: "",
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    customer: {
      address: "",
      city: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      postalCode: "",
      email: "",
    },
    orderPrice: 0,
    orderId: 0,
    delivery: {
      deliveryType: "Express",
      deliveryPrice: 100,
    },
    payment: {
      paymentType: "Swish",
    },
    cardDetails: {
      cardNumber: "",
      cardDate: "",
      cardCvc: "",
    },
    invoice: "",
  };

  getInvoiceDetails = (invoice: string) => {
    this.setState({ invoice: invoice });
  };

  getCardDetails = (card: Card) => {
    this.setState({ cardDetails: card });
  };

  getOrderPrice = (cart: CartItem[]) => {
    let price = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    this.setState({ orderPrice: price });
  };

  createOrderId = () => {
    const min = 11111;
    const max = 99999;
    const orderId = Math.floor(Math.random() * (max - min) + min);
    this.setState({ orderId });
    // return for convinience
    return orderId;
  };

  getDelivery = (delivery: Delivery) => {
    this.setState({ delivery });
  };

  getPayment = (payment: Payment) => {
    this.setState({ payment });
  };

  createCustomer = (customer: Customer) => {
    this.setState({ customer });
  };

  emptyCart = () => {
    this.setState({
      cart: [],
      customer: {
        address: "",
        city: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        postalCode: "",
        email: "",
      },
      orderPrice: 0,
      orderId: 0,
      delivery: {
        deliveryType: "Express",
        deliveryPrice: 100,
      },
      payment: {
        paymentType: "Swish",
      },
      cardDetails: {
        cardNumber: "",
        cardDate: "",
        cardCvc: "",
      },
      invoice: "",
    });
  };

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

    this.getOrderPrice(updatedCart);
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

    this.getOrderPrice(updatedCart);
    this.setState({ cart: updatedCart });
    console.log(updatedCart);
    console.log(updatedItemIndex);
  };

  removeAllFromCart = (product: Product) => {
    const updatedCart = [...this.state.cart];

    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };

    updatedItem.quantity = 0;
    updatedCart.splice(updatedItemIndex, 1);

    this.getOrderPrice(updatedCart);
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
          removeAllFromCart: this.removeAllFromCart,
          createCustomer: this.createCustomer,
          getOrderPrice: this.getOrderPrice,
          createOrderId: this.createOrderId,
          getDelivery: this.getDelivery,
          getPayment: this.getPayment,
          getCardDetails: this.getCardDetails,
          getInvoiceDetails: this.getInvoiceDetails,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
