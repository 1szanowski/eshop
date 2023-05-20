import React from "react";
import "./mid.css";

export default function MidButton(props) {
  const [data, updateData] = React.useState({
    sorter: "none"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
    if (value === "price") {
      props.sortCards();
    }
    if (value === "name") {
      props.sortByName();
    }
    if (value === "none") {
      props.unsorted();
    }
  }
//rewrite ti switch//
  return (
    <div className="sort_form">
      <label htmlFor="sorter">Sort by: </label>
      <br />
      <select id="sorter" className="select_mid" value={data.sorter} onChange={handleChange} name="sorter">
        <option value="none">--None--</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
        <option value="manufacturer">Manufacturer</option>
      </select>
    </div>
  );
}
