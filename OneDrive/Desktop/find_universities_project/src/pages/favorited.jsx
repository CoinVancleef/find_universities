import React, { useContext } from "react";
import AddedUniversity from "../components/AddedUniversity";
import { Context } from "../Context";

export default function Favorited() {
  const { favoriteUniArray } = useContext(Context);
  const favoritedUnis = favoriteUniArray.map((uni) => (
    <AddedUniversity name={uni.name} website={uni.website} />
  ));
  return <div className="favoritedPage">{favoritedUnis}</div>;
}
