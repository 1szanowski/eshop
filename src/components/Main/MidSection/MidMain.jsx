import React from "react";
import MidButton from "./MibButton";
import "./mid.css";

export default function MidMain(props) {
  return (
    <div>
      <MidButton sortCards={props.sortCards} sortByName={props.sortByName}
      unsorted={props.unsorted} />
    </div>
  );
}
