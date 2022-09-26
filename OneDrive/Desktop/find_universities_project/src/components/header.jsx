import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Find your University!</h3>
        </Link>
        <Link to="/favorited">
          <h3>Favorites</h3>
        </Link>
      </div>
    </header>
  );
}
