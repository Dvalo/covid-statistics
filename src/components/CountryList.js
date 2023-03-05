import React, { useState } from "react";
import gsap from "gsap";
import { formatDate, formatNumber } from "../utils/utils";

const CountryList = ({ countries, handleCountryClick }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const countryDomNodes = [];

  const handleMouseEnter = (idx) => {
    gsap.to(countryDomNodes[idx], { opacity: 0.8, scale: 1 });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(countryDomNodes[idx], { opacity: 0, scale: 0 });
  };

  const handleMouseMove = (event, idx) => {
    const elem = countryDomNodes[idx];
    gsap.to(elem, {
      x: event.clientX - elem.offsetWidth / 2,
      y: event.clientY - elem.offsetHeight / 2,
      duration: 0.25,
    });
  };

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    if (value && value !== "") {
      const filtered = countries.filter((country) => {
        return country.country.toLowerCase().includes(value);
      });
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  };

  return (
    <div className="country-listing">
      <input
        className="country-listing__search"
        type="text"
        onChange={handleChange}
        name="country"
        placeholder="Search By Country"
      ></input>
      {filteredCountries &&
        filteredCountries.map((country, idx) => (
          <button
            className="country-card"
            key={country.countryInfo.iso3}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onMouseMove={(event) => handleMouseMove(event, idx)}
            onClick={() => handleCountryClick(country)}
          >
            <p className="country-card__count">
              {idx < 10 ? ("0" + (idx + 1)).slice(-2) : idx}
            </p>
            <p className="country-card__label">{country.country}</p>
            <div className="country-card__info">
              <p className="country-card__continent">
                <span>Continent:</span>
                {country.continent}
              </p>
              <p className="country-card__population">
                <span>Population:</span>
                {formatNumber(country.population)}
              </p>
              <p className="country-card__updated">
                <span>Last Update:</span>
                {formatDate(country.updated)}
              </p>
            </div>
            <div className="country-card__trigger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
            </div>
            <div className="country-card__cursor">
              <img
                ref={(e) => (countryDomNodes[idx] = e)}
                src={country.countryInfo.flag}
                className="country-card__flag"
                alt=""
              ></img>
            </div>
          </button>
        ))}
    </div>
  );
};

export default CountryList;
