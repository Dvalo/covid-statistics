import React from "react";
import { formatDate, formatNumber } from "../utils/utils";

const CountryCard = ({ country }) => {
  return (
    <div className="country-display">
      <div className="country-display__top">
        <figure className="country-display__flag">
          <img src={country.countryInfo.flag} alt={country.country} />
        </figure>
        <div className="country-display__general-details">
          <p className="country-display__country">{country.country}</p>
          <div className="country-display__continent">
            <p className="country-display__eyebrow">Continent</p>
            {country.continent}
          </div>
          <div className="country-display__population">
            <p className="country-display__eyebrow">Population</p>
            {formatNumber(country.population)}
          </div>
          <div className="country-display__last-updated">
            <p className="country-display__eyebrow">Updated at</p>
            {formatDate(country.updated)}
          </div>
        </div>
      </div>
      <div className="country-display__bottom">
        <div className="country-display__box active">
          <p className="country-display__box-title">Total Active</p>
          <div className="country-display__box-stat">
            {formatNumber(country.active)}
          </div>
        </div>
        <div className="country-display__box active per_million">
          <p className="country-display__box-title">Active per million</p>
          <div className="country-display__box-stat">
            {country.activePerOneMillion}
          </div>
        </div>
        <div className="country-display__box cases">
          <p className="country-display__box-title">Total Cases</p>
          <div className="country-display__box-stat">
            {formatNumber(country.cases)}
          </div>
        </div>
        <div className="country-display__box cases per_million">
          <p className="country-display__box-title">Cases per million</p>
          <div className="country-display__box-stat">
            {formatNumber(country.casesPerOneMillion)}
          </div>
        </div>
        <div className="country-display__box critical">
          <p className="country-display__box-title">Critical Condition</p>
          <div className="country-display__box-stat">
            {formatNumber(country.critical)}
          </div>
        </div>
        <div className="country-display__box critical per_million">
          <div className="country-display__box-title">Critical per million</div>
          <div className="country-display__box-stat">
            {country.criticalPerOneMillion}
          </div>
        </div>
        <div className="country-display__box deaths">
          <p className="country-display__box-title">Total Deaths</p>
          <div className="country-display__box-stat">
            {formatNumber(country.deaths)}
          </div>
        </div>
        <div className="country-display__box deaths per_million">
          <p className="country-display__box-title">Deaths per million</p>
          <div className="country-display__box-stat">
            {country.deathsPerOneMillion}
          </div>
        </div>
        <div className="country-display__box recovered">
          <p className="country-display__box-title">Total Recovered</p>
          <div className="country-display__box-stat">
            {formatNumber(country.recovered)}
          </div>
        </div>
        <div className="country-display__box recovered per_million">
          <p className="country-display__box-title">Recovered per million</p>
          <div className="country-display__box-stat">
            {country.recoveredPerOneMillion}
          </div>
        </div>
        <div className="country-display__box tests">
          <p className="country-display__box-title">Total Tests</p>
          <div className="country-display__box-stat">
            {formatNumber(country.tests)}
          </div>
        </div>
        <div className="country-display__box tests per_million">
          <p className="country-display__box-title">Tests per million</p>
          <div className="country-display__box-stat">
            {country.testsPerOneMillion}
          </div>
        </div>
        <div className="country-display__box cases_today">
          <p className="country-display__box-title">Cases today</p>
          <div className="country-display__box-stat">
            {formatNumber(country.todayCases)}
          </div>
        </div>
        <div className="country-display__box deaths_today">
          <p className="country-display__box-title">Deaths today</p>
          <div className="country-display__box-stat">
            {formatNumber(country.todayDeaths)}
          </div>
        </div>
        <div className="country-display__box recovered_today">
          <p className="country-display__box-title">Recovered today</p>
          <div className="country-display__box-stat">
            {formatNumber(country.todayRecovered)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
