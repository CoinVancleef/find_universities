import React, { useState, useEffect } from "react";
import usePrevious from "./hooks/usePrevious";
import useDidMountEffect from "./hooks/useDidMountEffect";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [updatedCountriesData, setUpdatedCountriesData] = useState([]);
  const [favoriteUniArray, setFavoriteUniArray] = useState([]);
  const [countryFormData, setCountryFormData] = useState("");
  const [uniFormData, setUniFormData] = useState([]);
  const [searchResultsCountry, setSearchResultsCountry] = useState([]);
  const [searchResultsUni, setSearchResultsUni] = useState([]);
  const [wasRead, setWasRead] = useState(false);

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

  function handleChangeCountry(event) {
    const { value } = event.target;
    setCountryFormData(value);
  }

  function handleChangeUni(event) {
    const { value } = event.target;
    setUniFormData(value);
  }

  useEffect(() => {
    const results = updatedCountriesData.filter((country) =>
      country.name.toLowerCase().includes(countryFormData)
    );
    setSearchResultsCountry(results);
  }, [countryFormData]);

  useEffect(() => {
    if (uniFormData.length > 2) {
      fetch(`http://universities.hipolabs.com/search?name=${uniFormData}`)
        .then((res) => res.json())
        .then((data) => setSearchResultsUni(data));
    }
  }, [uniFormData]);

  function read() {
    setWasRead(true);
  }

  const prevUniLength = usePrevious(favoriteUniArray.length);

  useDidMountEffect(() => {
    if (prevUniLength < favoriteUniArray.length) {
      setWasRead(false);
    }
  }, [favoriteUniArray]);

  useDidMountEffect(() => {
    localStorage.setItem("universities", JSON.stringify(favoriteUniArray));
  }, [favoriteUniArray]);

  const localData = JSON.parse(localStorage.getItem("universities"));

  useEffect(() => {
    if (favoriteUniArray.length === 0 && localData) {
      setFavoriteUniArray(localData);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        updatedCountriesData,
        addToFavorites,
        favoriteUniArray,
        countryFormData,
        uniFormData,
        handleChangeCountry,
        handleChangeUni,
        searchResultsCountry,
        searchResultsUni,
        wasRead,
        read,
        localData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
