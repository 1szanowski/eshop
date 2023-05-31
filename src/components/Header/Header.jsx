import React from "react";
import "./header.css";
import { useState, useEffect } from "react";

export default function Header(props) {
  const [isCartOpen, setCartOpen] = useState(false);

  function handleCartClick() {
    isCartOpen ? setCartOpen(false) : setCartOpen(true);
  }

  return (
    <div className="wrapper_header">
      <header className="main_header">
        <div className="header_left">
          <img
            className="header_left_logo"
            src="https://m.media-amazon.com/images/I/31XEOe48RLL._AC_UF894,1000_QL80_.jpg"
          />
          <div className="header_info">
            <h3>Best Spaceships</h3>
            <p>Join starship troops today!</p>
          </div>
        </div>

        <ul className="header_right">
          <li className="rigth_cart" onClick={handleCartClick}>
            <img src="https://icon-library.com/images/hangar-icon/hangar-icon-7.jpg" width="40" height="40" />
            <span className="header_right_span">{props.price}$</span>
            {isCartOpen && (
              <div className="cart_dropdown">
                <div>
                  {props.cart.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>

                <div>
                  <strong>Total: {props.price}$</strong>
                </div>
              </div>
            )}
          </li>
          <li>
            <img src="https://icon-library.com/images/starwars-icon/starwars-icon-1.jpg" width="40" height="40" />
          </li>
        </ul>
      </header>
    </div>
  );
}
