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

  function unsorted() {
    const sorted = [...data.results];
    setSortData(sorted);
  }
  //rewrite
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
          <MidMain sortCards={sortCardsByPrice} sortByName={sortCardsByName} unsorted={unsorted} />
        </div>
        <Cards data={sortedData} />
      </div>
    </div>
  );
}


///add popup bin  //hidden div on click ///
// read about context
//call apply 
