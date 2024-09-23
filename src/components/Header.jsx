import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { IoMdBasket } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
const Header = () => {
  const [mode, setMode] = useState(true);
  const handleModeChange = () => {
    setMode(!mode);
    const myElement = document.getElementById("root");

    if (myElement) {
      if (mode) {
        myElement.classList.add("active");
      } else {
        myElement.classList.remove("active");
      }
      console.log(myElement);
    }
  };

  return (
    <header className="header">
      <div className="logo-image">
        <h1>Z.E</h1>
      </div>
      <div className="user-area">
        <input type="text" className="search-button" placeholder="search:" />
        <div className="icons">
          <IoMdBasket className="icon" />
          {mode ? (
            <MdLightMode className="icon" onClick={handleModeChange} />
          ) : (
            <IoMoon className="icon" onClick={handleModeChange} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
