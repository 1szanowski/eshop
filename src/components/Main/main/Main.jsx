import React, { useState, useEffect } from "react";
import Carousel from "../../Carousel/Carousel";
import Cards from "../main/Cards/Cards";
import MidMain from "../MidSection/MidMain";
import "./main.css";

export default function Main(props) {
  const [data, setData] = useState([]);
  const [sortedData, setSortData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then(res => res.json())

      .then(data => setData(data));
  }, []);
console.log(data.results)

  function sortCardsByPrice() {
    const sorted = [...data.results].sort((a, b) => {
      return a.cost_in_credits - b.cost_in_credits;
    });
    setSortData(sorted);
  }

  function sortCardsByName() {
    const sorted = [...data.results].sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    setSortData(sorted);
  }

  function sortCardsByManufacturer() {
    const sorted = [...data.results].sort((a, b) => {
      return a.manufacturer.toLowerCase().localeCompare(b.manufacturer.toLowerCase());
    });
    setSortData(sorted);
  }

  function unsorted() {
    const sorted = [...data.results];
    setSortData(sorted);
  }

  return (
    <div>
      <div
        style={{
          maxWidth: 960,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 45
        }}
      >
        <Carousel style={{ borderRadius: "20px" }} />
        <div className="mid_wrapper">
          <MidMain
            sortCards={sortCardsByPrice}
            sortByName={sortCardsByName}
            unsorted={unsorted}
            sortCardsByManufacturer={sortCardsByManufacturer}
          />
        </div>
        <div className="card_global_wrapper">
          <Cards
            data={sortedData}
            unsortedData={data.results}
            addToCart={props.addToCart}
            handleItemCounter={props.handleItemCounter}
            counter={props.counter}
            removeFromCart ={props.removeFromCart}
            cart ={props.cart}
          />
        </div>
      </div>
    </div>
  );
}
