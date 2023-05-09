import {
  createContext,
  useState,
  FC,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type CartContextType = {
  cartItems: CartItem[];
  setCartItems: Dispatch<React.SetStateAction<CartItem[]>>;
  setItemQuantity: (cartItemToSetQuantity: CartItem, quantity: number) => void;
  clearItemFromCart: (cartItemToClear: CartItem) => void;
  cartTotal: number;
};

const setCartItemQuantity = (
  cartItems: CartItem[],
  cartItemToSetQuantity: CartItem,
  quantity: number
) => {
  if (quantity === 0) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToSetQuantity.id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToSetQuantity.id
      ? { ...cartItem, quantity: quantity }
      : cartItem
  );
};
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext<CartContextType>({
  cartItems: [
    { id: "1", name: "Default Title", price: 12, quantity: 2 },
    { id: "2", name: "Default Title", price: 12, quantity: 2 },
  ],
  setCartItems: () => {},
  clearItemFromCart: () => {},
  setItemQuantity: () => {},
  cartTotal: 0,
});
type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "Default Title", price: 12, quantity: 2 },
    { id: "2", name: "Default Title", price: 12, quantity: 2 },
  ]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const clearItemFromCart = (cartItemToClear: CartItem) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const setItemQuantity = (
    cartItemToSetQuantity: CartItem,
    quantity: number
  ) => {
    setCartItems(
      setCartItemQuantity(cartItems, cartItemToSetQuantity, quantity)
    );
  };

  const value = {
    cartItems,
    setCartItems,
    cartTotal,
    clearItemFromCart,

    setItemQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
