import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="brandname">MAKER SMITH</div>
      <div>

      
      <input type="checkbox" name="" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </label>
        
        <Link to="Title" smooth={true} duration={500}>
          <div>Home</div>
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          <div>Services</div>
        </Link>
        <Link to="UserForm" smooth={true} duration={500}>
          <div>Contact</div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
