import React, { useContext } from "react";
import University from "../components/University";
import { Context } from "../Context";

export default function Favorited() {
  const { favoriteUniArray } = useContext(Context);
  const favoritedUnis = favoriteUniArray.map((uni) => (
    <University name={uni.name} website={uni.website} />
  ));
  return <div className="favoritedPage">{favoritedUnis}</div>;
}
