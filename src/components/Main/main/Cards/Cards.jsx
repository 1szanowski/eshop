import React from "react";
import "./card.css";
import Single from "./Single";


export default function Cards(props) {
  
  const allItems =
    props.data &&
    props.data.map(el => (
      <Single key={el.name} name={el.name}
      manufacturer={el.manufacturer}
      price={el.cost_in_credits}
      sorter={props.sorter} />
    ));

  return (
    <div>
      <h3>Our crafts: </h3>
      <div className="card_wrapper">{allItems}</div>
    </div>
  );
}

/// add button component //  done
// move single card comp // done
// filter component
