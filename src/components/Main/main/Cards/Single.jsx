import React from "react";
import { useState, useEffect } from "react";

export default function Single(props) {
  const [isAddedtoCart, setAdded] = useState(false); //added for checkout

  function handleAdd() {
    props.addToCart(props.name, props.price); //mod for checkout
    setAdded(true);
    props.handleItemCounter(props.name);
  }

  return (
    <div className="card_holder">
      <div className="info_wrapper">
        <p>
          Name: <strong>{props.name}</strong>
        </p>
        <p>
          Manufacturer: <strong>{props.manufacturer}</strong>
        </p>
        <p>
          Price : <strong>{props.price}</strong>
        </p>
      </div>
      <div className="btn_holder">
        <button onClick={handleAdd}>Add to cart</button>
        <button className="remove_btn" onClick={() => props.removeFromCart(props.name)}>
          Remove
        </button>
        <span className="checkout_sign">
          <strong>Added {props.counter[props.name] || 0}</strong>
        </span>
      </div>
    </div>
  );
}
