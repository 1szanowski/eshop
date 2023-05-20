import React from "react";
import "./carousel.css";

export default function CarouselButton({ className, handleClick, name }) {
  return (
    <button className={className} onClick={handleClick}>
      <h3>{name}</h3>
    </button>
  );
}
