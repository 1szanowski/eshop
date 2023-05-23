import React from "react";
import "./card.css";
import Single from "./Single";

export default function Cards(props) {
  
  let allItems = null;

  if (props.data.length === 0) {
    allItems =
      props.unsortedData &&
      props.unsortedData.map(el => (
        <Single
          key={el.name}
          name={el.name}
          manufacturer={el.manufacturer}
          price={el.cost_in_credits}
          sorter={props.sorter}
          addToCart={props.addToCart}
        />
      ));
  } else {
    allItems =
      props.data &&
      props.data.map(el => (
        <Single
          key={el.name}
          name={el.name}
          manufacturer={el.manufacturer}
          price={el.cost_in_credits}
          sorter={props.sorter}
          addToCart={props.addToCart}
        />
      ));
  }

  return (
    <div>
      <h3>Our crafts: </h3>
      <div className="card_wrapper">{allItems}</div>
    </div>
  );
}
