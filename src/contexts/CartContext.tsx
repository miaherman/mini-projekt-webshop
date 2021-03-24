import { Component, createContext } from "react";
import { Product } from "../products";

export interface Order {
  id: number;
  customer: Customer;
  cart: CartItem[];
  totalPrice: number;
}

export interface Customer {
  address?: string;
  city?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  postalCode?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
interface State {
  cart: CartItem[];
  customer: Customer;
  orderPrice: number;
  deliveryPrice: number;
}

interface ContextValue extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  emptyCart: () => void;
  createCustomer: (customer: Customer) => void;
  getOrderPrice: (cart: CartItem[]) => void;
  getDeliveryPrice: (deliveryPrice: number) => void;
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
  deliveryPrice: 0,
  getDeliveryPrice: () => {}
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    customer: {},
    orderPrice: 0,
    deliveryPrice: 0
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

  getDeliveryPrice = (deliveryPrice: number) => {

    this.setState({ deliveryPrice: deliveryPrice });
    console.log(deliveryPrice)

  };

  createCustomer = (customer: Customer) => {
    this.setState({ customer: customer })
    console.log(customer)
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
          cart: this.state.cart,
          addToCart: this.addProductToCart,
          removeFromCart: this.removeProductFromCart,
          emptyCart: () => {}, // Todo...
          customer: this.state.customer,
          createCustomer: this.createCustomer,
          getOrderPrice: this.getOrderPrice,
          orderPrice: this.state.orderPrice,
          getDeliveryPrice: this.getDeliveryPrice,
          deliveryPrice: this.state.deliveryPrice
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
