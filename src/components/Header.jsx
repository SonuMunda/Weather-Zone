import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  //state for toggle nav
  const [navActive, setNavActive] = useState(false);



  return (
    //Header
    <header className={`header center bg-white shadow shadow-gray-300`}>
      <div className="container around">
        {/*Brand*/}
        <div className="brand">
          {/*Brand Icon*/}
          <img src="/favicon.png" alt="icon" />
          {/*Brand Logo*/}
          <h1 className="text-xl font-bold">WeatherZone</h1>
        </div>
        {/*Navbar*/}
        <nav className={`navbar ${navActive ? "nav-active" : ""}`}>
          <ul className="nav-links flex">
            <li className="list-item text-">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="list-item text-">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li className="list-item text-">
              <NavLink
                to="guide"
                className="nav-link"
                onClick={() => {
                  setNavActive(false);
                }}
              >
                Usage Guide
              </NavLink>
            </li>
          </ul>
        </nav>
        {/*Menu Bar*/}
        <div
          className="menubar"
          onClick={() => {
            if (navActive === true) {
              setNavActive(false);
            } else {
              setNavActive(true);
            }
          }}
        >
          <span>&#9776;</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
