import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
  const { favoriteUniArray, wasRead, read } = useContext(Context);
  const dotStyle = wasRead ? "dot dot-gray" : "dot";
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Find your University!</h3>
        </Link>
        <Link className="fav" to="/favorited" onClick={() => read()}>
          <h3>Favorites</h3>
          {favoriteUniArray.length > 0 && (
            <p className={dotStyle}>{favoriteUniArray.length}</p>
          )}
        </Link>
      </div>
    </header>
  );
}
