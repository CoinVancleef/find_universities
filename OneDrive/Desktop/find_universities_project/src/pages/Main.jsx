import React, { useContext } from "react";
import Country from "../components/Country";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Main() {
  const { updatedCountriesData } = useContext(Context);
  const allCountries = updatedCountriesData.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));
  return (
    <div className="countriesContainer">
      <div className="allCountries">{allCountries}</div>
    </div>
  );
}
