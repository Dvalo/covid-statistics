import React from "react";
import ReactLoading from "react-loading";

class CountryList extends React.Component {
  render() {
    if (
      this.props.countriesData == null ||
      this.props.countriesData.length === 0
    ) {
      return (
        <ReactLoading type="bubbles" color="#ffffff" height={64} width={64} />
      );
    } else {
      return (
        <table id="countries_table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Cases</th>
              <th>Cases Today</th>
              <th>Deaths</th>
              <th>Deaths Today</th>
              <th>Recovered</th>
              <th>Active</th>
              <th>Critical</th>
            </tr>
          </thead>
          <tbody>
            {this.props.countriesData.map((country) => (
              <tr key={country.country} className="country_row">
                <th
                  className="country-display"
                  onClick={() => this.props.whenClicked(country)}
                >
                  <img
                    src={country.countryInfo.flag}
                    alt={country.country}
                    className="country-img"
                  ></img>
                  {country.country}
                </th>
                <th>{country.cases}</th>
                <th>{country.todayCases}</th>
                <th>{country.deaths}</th>
                <th>{country.todayDeaths}</th>
                <th>{country.recovered}</th>
                <th>{country.active}</th>
                <th>{country.critical}</th>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default CountryList;
