import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import CountryList from "./components/CountryList";

import "./styles/main.scss";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);
  const [isRandomized, setIsRandomized] = useState(true);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        const filteredData = response.data.filter((country) => {
          return country.countryInfo.iso3 !== null;
        });
        setCountries(filteredData);
        getRandomCountry(filteredData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getRandomCountry = (countries) => {
    const generateRandomInt = Math.floor(Math.random() * countries.length);
    const randomizedCountry = countries[generateRandomInt];
    setActiveCountry(randomizedCountry);
  };

  const handleCountryClick = (country) => {
    if (isRandomized) {
      setIsRandomized(false);
    }
    setActiveCountry(country);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="covid-tracker">
      <div className="covid-tracker__section covid-tracker__section--display">
        <div className="covid-tracker__section-inner">
          {isRandomized && (
            <div className="covid-tracker__section-intro">
              <p className="covid-tracker__section-title">Country Card</p>
              <p className="covid-tracker__section-desc">
                Random country has been displayed as an example, view
                instructions below to display specific country of your choice.
              </p>
            </div>
          )}
          {activeCountry ? (
            <CountryCard country={activeCountry} />
          ) : (
            <p className="loading">Loading Data...</p>
          )}
        </div>
      </div>

      <div className="covid-tracker__section covid-tracker__section--listing">
        <div className="covid-tracker__section-inner">
          <div className="covid-tracker__section-intro">
            <p className="covid-tracker__section-title">Country Listing</p>
            <p className="covid-tracker__section-desc">
              Click on the specific country name to view all the details about
              the country.
            </p>
          </div>
          {countries.length ? (
            <CountryList
              countries={countries}
              handleCountryClick={handleCountryClick}
            />
          ) : (
            <p className="loading">Loading Data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
