import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const countriesURL = "https://restcountries.com/v2/all?fields=name,flags";
  useEffect(() => {
    fetch(countriesURL)
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);
  console.log(countriesData);
  return (
    <Context.Provider value={{ countriesData }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
