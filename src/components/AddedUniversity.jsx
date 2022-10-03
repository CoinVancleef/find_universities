import React, { useContext, useState } from "react";
import deleteIcon from "../assets/delete.svg";
import filledDeleteIcon from "../assets/delete_icon_filled.png";
import { Context } from "../Context";

export default function AddedUniversity({ name, website }) {
  const { addToFavorites } = useContext(Context);
  const [hovered, setHovered] = useState(false);
  function removeIcon() {
    if (hovered) {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={filledDeleteIcon}
          alt="delete icon filled"
        />
      );
    } else {
      return (
        <img
          onClick={() => addToFavorites({ name, website })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={deleteIcon}
          alt="delete icon"
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
      {removeIcon()}
    </div>
  );
}
