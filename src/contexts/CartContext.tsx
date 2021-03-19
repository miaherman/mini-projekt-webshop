import { Component, createContext } from "react";
import { Product } from "../products";

interface CartItem extends Product {
  quantity: number;
}
interface State {
  cart: CartItem[];
  customer: any
}

interface ContextValue extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  createCustomer: (customer: any) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  customer: {},
  createCustomer: () => {},
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    customer: {}
  };

  createCustomer = (customer: any) => {
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
          customer: this.state.customer,
          createCustomer: this.createCustomer
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
