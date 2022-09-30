import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import redCircle from "../assets/red_circle.png";

export default function Header() {
  const { favoriteUniArray } = useContext(Context);
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Find your University!</h3>
        </Link>
        <Link className="fav" to="/favorited">
          <h3>Favorites</h3>
          {favoriteUniArray.length > 0 && (
            <p className="dot">{favoriteUniArray.length}</p>
          )}
        </Link>
      </div>
    </header>
  );
}
