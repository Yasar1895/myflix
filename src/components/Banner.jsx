import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>Welcome to Netflix Clone</h1>
        <p>Stream your favorite movies and TV shows instantly</p>
        <button className="btn red">Play</button>
        <button className="btn white">My List</button>
      </div>
    </header>
  );
}