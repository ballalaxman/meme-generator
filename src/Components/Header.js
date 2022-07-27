import React from "react";
import Trollface from "../Images/Trollface.png";

export default function Header() {
  return (
    <header>
      <div className="header-icon">
        <img src={Trollface} />
        <h2>Meme Generator</h2>
      </div>
      <div className="header-text">
        <h4>React Course-Project 3</h4>
      </div>
    </header>
  );
}
