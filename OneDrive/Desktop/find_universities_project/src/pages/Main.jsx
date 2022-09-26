import React, { useContext } from "react";
import Country from "../components/Country";
import { Context } from "../Context";

export default function Main() {
  const { countriesData } = useContext(Context);
  const allCountries = countriesData.map((country) => (
    <Country countryName={country.name} img={country.flags.svg} />
  ));
  return (
    <div className="countriesContainer">
      <div className="allCountries">{allCountries}</div>
    </div>
  );
}
