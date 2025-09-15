import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">NETFLIX</h1>
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>My List</li>
      </ul>
    </nav>
  );
}