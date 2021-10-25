import React from "react";
import ReactLoading from "react-loading";

class CountryList extends React.Component {
  render() {
    if (
      this.props.countriesData == null ||
      this.props.countriesData.length === 0
    ) {
      return (
        <ReactLoading
          type="bubbles"
          color="#ffffff"
          height={64}
          width={64}
        />
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
              <th>Recovered Today</th>
              <th>Active</th>
              <th>Critical</th>
            </tr>
          </thead>
          <tbody>
            {this.props.countriesData.map((elem) => (
              <tr key={elem.country} className="country_row">
                <th
                  className="country-display"
                  onClick={() => this.props.whenClicked(elem)}
                >
                  <img
                    src={elem.countryInfo.flag}
                    alt={elem.country}
                    className="country-img"
                  ></img>
                  {elem.country}
                </th>
                <th>{elem.cases}</th>
                <th>{elem.todayCases}</th>
                <th>{elem.deaths}</th>
                <th>{elem.todayDeaths}</th>
                <th>{elem.recovered}</th>
                <th>{elem.todayRecovered}</th>
                <th>{elem.active}</th>
                <th>{elem.critical}</th>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default CountryList;
