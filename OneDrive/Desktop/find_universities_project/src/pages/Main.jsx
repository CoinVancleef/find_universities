import React, { useContext } from "react";
import Country from "../components/Country";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import University from "../components/University";

export default function Main() {
  const {
    updatedCountriesData,
    searchResultsCountry,
    searchResultsUni,
    countryFormData,
    uniFormData,
    handleChangeUni,
    handleChangeCountry,
  } = useContext(Context);

  const allCountries = updatedCountriesData.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));

  const searchedCountries = searchResultsCountry.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));

  const searchedUniversities = searchResultsUni.map((uni) => {
    return <University name={uni.name} website={uni.web_pages[0]} />;
  });

  const searchUni =
    uniFormData.length === 0 ? allCountries : searchedUniversities;

  function display() {
    if (searchResultsUni.length === 0 && searchResultsCountry.length === 0) {
      return allCountries;
    } else if (searchResultsCountry.length > 0) {
      return searchedCountries;
    } else {
      return searchUni;
    }
  }

  return (
    <div className="wrapper">
      <Form
        placeholder="Search for a country"
        data={countryFormData}
        handleChange={handleChangeCountry}
      />
      <Form
        placeholder="Search for universities"
        data={uniFormData}
        handleChange={handleChangeUni}
      />
      <div className="countriesContainer">
        <div className="allCountries">{display()}</div>
      </div>
    </div>
  );
}
