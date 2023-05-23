import React from "react";
import { useState, useEffect } from "react";

export default function Single(props) {
  const [isAddedtoCart, setAdded] = useState(false); //added for checkout

  function handleAdd() {
    props.addToCart(props.name, props.price); //mod for checkout
    setAdded(true);
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
        <button className="quantity">+</button>
        <p>quantity:1</p>
        <button className="quantity">-</button>
        <div className="added_to_bin">{isAddedtoCart && <span className="checkout_sign">Added</span>}</div>
      </div>
    </div>
  );
}
