import React from "react";
import logo from "../logo.svg";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="React Logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
