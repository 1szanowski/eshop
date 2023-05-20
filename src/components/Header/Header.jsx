import React from "react";
import classes from "./Header.module.css"


export default function Header(props) {
  return (
    <div className="wrapper_header">
      <header className="main_header">
        <div className="header_left">
          <img  className="header_left_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Weyland-yutani-logo.svg/1024px-Weyland-yutani-logo.svg.png?20160108060552"/>
          <div className="header_info">
            <h3>Best Spaceships</h3>
            <p>Join starship troops today!</p>
          </div>
        </div>

        <ul className="header_right">
          <li className="rigth_cart">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <span className="header_right_span">1200$</span>
          </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <circle cx="10" cy="7" r="5" stroke="#9B9B9B" stroke-width="2" fill="none" />
  <path d="M10 12C7.79086 12 6 13.7909 6 16H14C14 13.7909 12.2091 12 10 12Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
          </li>
        </ul>
      </header>
    </div>
  );
}
