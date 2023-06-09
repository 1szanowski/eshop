import "./App.css";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/main/Main.jsx";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { Link, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext.js";
import About from "./components/About/About";

function App() {
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

  useEffect(() => {
    const updatedCounter = cart.reduce((counter, item) => {
      counter[item.name] = (counter[item.name] || 0) + 1;
      return counter;
    }, {});
    setCounter(updatedCounter);
  }, [cart]);

  function handleItemCounter(name) {
    setCounter(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  }

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const itemNames = cart.map(el => el.name);
    setTotalPrice(totalPrice);
    setTotal(itemNames);
  }, [cart]);

  return (
    <div className="App">
      <Header cart={updatedCart} price={price} />
      <div className="wrapper_link">
        <Link to="/main">
          <h3>Main Store</h3>
        </Link>
        <Link to="/about">
          <h3>About Us</h3>
        </Link>
      </div>

      <Routes>
        <Route
          path="/main"
          element={
            <Main
              addToCart={addToCart}
              counter={counter}
              handleItemCounter={handleItemCounter}
              removeFromCart={removeFromCart}
              cart={updatedCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      
   

      <Footer />
    </div>
  );
}

export default App;
