import React from "react";

export default function Country({ img, countryName }) {
  return (
    <div className="country">
      <img src={img} alt={countryName} />
      <h3>{countryName}</h3>
    </div>
  );
}
