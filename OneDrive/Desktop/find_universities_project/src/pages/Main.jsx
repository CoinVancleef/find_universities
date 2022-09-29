import React, { useContext } from "react";
import Country from "../components/Country";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Main() {
  const { updatedCountriesData, searchResults } = useContext(Context);
  const allCountries = updatedCountriesData.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));
  const searchedCountries = searchResults.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));
  return (
    <div className="wrapper">
      <Form placeholder="Search for a country" />
      <div className="countriesContainer">
        <div className="allCountries">
          {searchResults.length === 0 ? allCountries : searchedCountries}
        </div>
      </div>
    </div>
  );
}
