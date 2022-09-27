import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import University from "../components/University";

export default function Universities(props) {
  const { countryName } = useParams();
  const [uniData, setUniData] = useState([]);
  const searchByCountryURL = `http://universities.hipolabs.com/search?country=${countryName}`;
  useEffect(() => {
    fetch(searchByCountryURL)
      .then((res) => res.json())
      .then((data) => setUniData(data));
  }, []);
  const allUniversities = uniData.map((uni) => {
    return <University name={uni.name} website={uni.web_pages[0]} />;
  });
  return <div className="universitiesPage">{allUniversities}</div>;
}
