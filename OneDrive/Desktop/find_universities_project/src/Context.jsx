import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [updatedCountriesData, setUpdatedCountriesData] = useState([]);
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

  console.log(updatedCountriesData);
  return (
    <Context.Provider value={{ updatedCountriesData }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };