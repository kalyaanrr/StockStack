import React from 'react'
import "frontend/src/styles/navistyle.css"

import logo from "frontend/src/components/logo.gif";
function NavigationBar() {
  return (
    <div className="navibar">
       <div className="logo"> 
            <img src={logo}alt='Hello'/>
            <a href="/" id="ssn">StockStack</a>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/add">About</a></li>
            <li><a href="/edit">Contact</a></li>
        </ul>
    </div>

  );
}

export default NavigationBar