import "./App.css";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/main/Main.jsx";
import React, { useState, useEffect } from "react"; //added imports

function App() {
  const [cart, setCart] = useState([]); //added cart
  const [updatedCart, setTotal] = useState([]);
  const [price, setTotalPrice] = useState(0);

  function addToCart(name, price) {
    setCart(prev => {
      const newItem = { name: name, price: price !== "unknown" ? parseFloat(price) : 0 };
      return [...prev, newItem];
    });
  }
  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const itemNames = cart.map(el => el.name);
    setTotalPrice(totalPrice);
    setTotal(itemNames);
  }, [cart]);

  return (
    <div className="App">
      <Header cart={updatedCart} price={price}/>
      <Main addToCart={addToCart} />
    </div>
  );
}

export default App;
