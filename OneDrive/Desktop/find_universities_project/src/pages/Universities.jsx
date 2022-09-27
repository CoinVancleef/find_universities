import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import University from "../components/University";
import { Context } from "../Context";

export default function Universities(props) {
  const { countryName } = useParams();
  const [uniData, setUniData] = useState([]);
  const searchByCountryURL = `http://universities.hipolabs.com/search?country=${countryName}`;
  useEffect(() => {
    fetch(searchByCountryURL)
      .then((res) => res.json())
      .then((data) => setUniData(data));
  }, []);
  function allUniversities() {
    if (uniData.length === 0) {
      return <University name={"Sorry, no data so far"} />;
    }
    return uniData.map((uni) => {
      return <University name={uni.name} website={uni.web_pages[0]} />;
    });
  }
  return <div className="universitiesPage">{allUniversities()}</div>;
}
