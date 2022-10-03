import React, { useContext, useState } from "react";
import addCircle from "../assets/add_circle.svg";
import checkCircle from "../assets/check_circle.svg";
import addCircleFilled from "../assets/add_circle_filled.png";
import checkCircleFilled from "../assets/check_circle_filled.png";
import { Context } from "../Context";

export default function University({ name, website }) {
  const { addToFavorites, favoriteUniArray } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  function icon() {
    if (favoriteUniArray.find((uni) => uni.name === name)) {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={checkCircleFilled}
          alt="check circle"
        />
      );
    } else {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={hovered ? addCircleFilled : addCircle}
          alt="add circle"
        />
      );
    }
  }

  return (
    <div className="university">
      <h3>{name}</h3>
      <a href={website} target="_blank">
        Visit their website!
      </a>
      {icon()}
    </div>
  );
}
