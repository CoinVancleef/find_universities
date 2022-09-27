import React from "react";

export default function University({ name, website }) {
  return (
    <div className="university">
      <h3>{name}</h3>
      <p>{website}</p>
    </div>
  );
}
