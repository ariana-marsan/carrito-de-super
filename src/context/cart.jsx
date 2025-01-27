import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart)

  const addToCart = (product) => {

    const productIndex = cart.findIndex((item) => item.id === product.id);

    if(productIndex >= 0) {
        const newCart= structuredClone(cart)

        newCart[productIndex].quantity+= 1;
        console.log(newCart)
        return setCart(newCart);
    }
    setCart(prevState=> ([
        ...prevState,
        {
            ...product,
            quantity: 1
        }   
    ])
    )
  };

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
        cart, setCart, addToCart, clearCart, removeFromCart
        }}>
      {children}
    </CartContext.Provider>
  );
}