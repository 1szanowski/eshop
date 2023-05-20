import React from "react";
import Cards from "./Cards";

export default function Single(props) {
  return (
    <div className="card_holder">
      <div className="info_wrapper">
        <p>Name: {props.name}</p>
        <p>Manufacturer: {props.manufacturer}</p>
        <p>Price : {props.price}</p>
      </div>
      <div className="btn_holder">
        <button>Buy now!</button>
      </div>
    </div>
  );
}
