import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [updatedCart, setTotal] = useState([]);
  const [price, setTotalPrice] = useState(0);
  const [counter, setCounter] = useState(0);

  function addToCart(name, price) {
    setCart(prev => {
      const newItem = {
        name: name,
        price: price !== "unknown" ? parseFloat(price) : 0
      };
      return [...prev, newItem];
    });
  }

  function removeFromCart(name, price) {
    setCart(prev => {
      const index = prev.findIndex(item => item.name === name);
      if (index !== -1) {
        const updatedCart = [...prev];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        setCounter(prev => {
          const updatedCounter = { ...prev };
          if (updatedCounter[name] && updatedCounter[name] > 0) {
            updatedCounter[name] -= 1;
          }
          return { ...updatedCounter };
        });
      }
      return prev;
    });
  }

  function handleItemCounter(name) {
    setCounter(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  }

  useEffect(() => {
    const updatedCounter = cart.reduce((counter, item) => {
      counter[item.name] = (counter[item.name] || 0) + 1;
      return counter;
    }, {});
    setCounter(updatedCounter);
  }, [cart]);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const itemNames = cart.map(el => el.name);
    setTotalPrice(totalPrice);
    setTotal(itemNames);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updatedCart,
        price,
        counter,
        handleItemCounter
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
