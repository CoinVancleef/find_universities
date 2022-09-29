import React, { useContext } from "react";
import { Context } from "../Context";

export default function Form({ placeholder }) {
  const { countryFormData, handleChange } = useContext(Context);
  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={countryFormData}
      />
    </form>
  );
}
