import React, { useContext } from "react";
import Country from "../components/Country";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import University from "../components/University";
import ScrollToUp from "../components/ScrollToTop";

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
    <Link to={`/countries/${country.name}`} key={country.flags.svg}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));

  const searchedCountries = searchResultsCountry.map((country) => (
    <Link to={`/countries/${country.name}`}>
      <Country countryName={country.name} img={country.flags.svg} />
    </Link>
  ));

  const searchedUniversities = searchResultsUni.map((uni) => {
    return (
      <University key={uni.name} name={uni.name} website={uni.web_pages[0]} />
    );
  });

  const searchUni =
    uniFormData.length === 0 ? allCountries : searchedUniversities;

  function display() {
    if (searchResultsUni.length === 0 && searchResultsCountry.length === 0) {
      return <div className="allCountries">{allCountries}</div>;
    } else if (searchResultsCountry.length > 0) {
      return <div className="allCountries">{searchedCountries}</div>;
    } else {
      return <div className="universitiesPage">{searchUni}</div>;
    }
  }

  return (
    <div className="wrapper">
      <div className="mainForm">
        <Form
          placeholder="Search for a country 🌎"
          data={countryFormData}
          handleChange={handleChangeCountry}
        />
        <Form
          placeholder="Search for universities 🏫"
          data={uniFormData}
          handleChange={handleChangeUni}
        />
      </div>
      <div className="countriesContainer">{display()}</div>
      <ScrollToUp />
    </div>
  );
}
