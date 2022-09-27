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

  const updated = countriesData.map((country) => {
    return country.name === "United States of America"
      ? { ...country, name: "United States" }
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
