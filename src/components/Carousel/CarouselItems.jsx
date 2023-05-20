import React, { useState, useEffect } from "react";
import { pictures } from "./mock";




export default function CarouselItems(props) {
const {pictures} = props




  return (
    
   <>
   {pictures.map(el=> (<img src={el.src} alt={el.alt}/>))}
     
   </>
    
    
  );
}
