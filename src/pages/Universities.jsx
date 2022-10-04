import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import University from "../components/University";
import { Context } from "../Context";
import Form from "../components/Form";

export default function Universities() {
  const { countryName } = useParams();
  const [uniData, setUniData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { universitiesURL } = useContext(Context);

  const errorMessage = (
    <h1 className="error">
      We've searched far and wide but haven't found any universities 😭
    </h1>
  );

  useEffect(() => {
    setLoading(true);
    fetch(universitiesURL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUniData(data.filter((uni) => uni.country === countryName));
      });
  }, []);

  function allUniversities() {
    if (uniData.length === 0) {
      return errorMessage;
    } else if (searchResult.length === 0 && input.length > 0) {
      return <h2>No matching universities found</h2>;
    } else if (input.length === 0) {
      return uniData.map((uni) => {
        return <University name={uni.name} website={uni.web_pages[0]} />;
      });
    } else {
      return searchedUniversities;
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  useEffect(() => {
    const results = uniData.filter((uni) =>
      uni.name.toLowerCase().includes(input)
    );
    setSearchResult(results);
  }, [input]);

  const searchedUniversities = searchResult.map((uni) => {
    return <University name={uni.name} website={uni.web_pages[0]} />;
  });

  return (
    <div className="uniWrapper">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {uniData.length > 0 && (
            <Form
              placeholder={`Search for universities in ${countryName}`}
              data={input}
              handleChange={handleChange}
            />
          )}
          <div className="universitiesPage">{allUniversities()}</div>
        </div>
      )}
    </div>
  );
}
