import React, { useContext } from "react";
import addCircle from "../assets/add_circle.svg";
import checkCircle from "../assets/check_circle.svg";
import { Context } from "../Context";

export default function University({ name, website }) {
  const { addToFavorites, favoriteUniArray } = useContext(Context);

  function icon() {
    if (favoriteUniArray.find((uni) => uni.name === name)) {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          src={checkCircle}
          alt="add circle"
        />
      );
    } else {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          src={addCircle}
          alt="add circle"
        />
      );
    }
  }

  return (
    <div className="university">
      <h3>{name}</h3>
      <p>{website}</p>
      {icon()}
    </div>
  );
}
