import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [updatedCountriesData, setUpdatedCountriesData] = useState([]);
  const [favoriteUniArray, setFavoriteUniArray] = useState([]);
  const [countryFormData, setCountryFormData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const countriesURL = "https://restcountries.com/v2/all?fields=name,flags";

  useEffect(() => {
    fetch(countriesURL)
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  const markers = [" of", " (", ","];

  function countryNameModyfier(string) {
    if (string.includes(markers[1])) {
      return string.split(markers[1])[0];
    }
    if (string.includes(markers[0])) {
      return string.split(markers[0])[0];
    }
    if (string.includes(markers[2])) {
      return string.split(markers[2])[0];
    }
  }

  const updated = countriesData.map((country) => {
    return country.name.includes(markers[0] || markers[1] || markers[2])
      ? { ...country, name: countryNameModyfier(country.name) }
      : country;
  });

  useEffect(() => {
    setUpdatedCountriesData(updated);
  }, [countriesData]);

  function addToFavorites(uni) {
    if (favoriteUniArray.some((item) => item.name === uni.name)) {
      setFavoriteUniArray((prevUni) =>
        prevUni.filter((el) => el.name !== uni.name)
      );
    } else {
      setFavoriteUniArray((prevUni) => [...prevUni, uni]);
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setCountryFormData(value);
  }

  useEffect(() => {
    const results = updatedCountriesData.filter((country) =>
      country.name.toLowerCase().includes(countryFormData)
    );
    setSearchResults(results);
  }, [countryFormData]);

  console.log(searchResults);

  return (
    <Context.Provider
      value={{
        updatedCountriesData,
        addToFavorites,
        favoriteUniArray,
        countryFormData,
        handleChange,
        searchResults,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
