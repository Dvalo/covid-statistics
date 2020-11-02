import React from 'react';

class CountryCard extends React.Component {
    render() {
        if ( this.props.currentCountry == null || this.props.currentCountry.length === 0) {
        return <div>Loading...</div>;
        } else {
        let dateTime = new Date(this.props.currentCountry.updated);
        let displayDateTime = dateTime.toLocaleString("en-GB");
        return (
            <div id="country-card">
            <div className="top-wrap">
                <div className="country-flag">
                <img
                    src={this.props.currentCountry.countryInfo.flag}
                    alt={this.props.currentCountry.country}
                />
                </div>
                <div className="top-details-wrap">
                <div className="country">
                    {this.props.currentCountry.country}{" "}
                </div>
                <div className="continent">
                    <span className="main-title">Continent</span>
                    {this.props.currentCountry.continent}{" "}
                </div>
                <div className="population">
                    <span className="main-title">population</span>
                    {this.props.currentCountry.population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </div>
                <div className="last-updated">
                    <span className="main-title">updated at</span>
                    {displayDateTime}
                </div>
                </div>
            </div>
            <div className="bottom-wrap">
                <div className="info-box active">
                <div className="info-box-title">Total Active</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.active}
                </div>
                </div>
                <div className="info-box active per_million">
                <div className="info-box-title">Active per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.activePerOneMillion}
                </div>
                </div>
                <div className="info-box cases">
                <div className="info-box-title">Total Cases</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.cases}
                </div>
                </div>
                <div className="info-box cases per_million">
                <div className="info-box-title">Cases per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.casesPerOneMillion}
                </div>
                </div>
                <div className="info-box critical">
                <div className="info-box-title">Critical Condition</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.critical}
                </div>
                </div>
                <div className="info-box critical per_million">
                <div className="info-box-title">Critical per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.criticalPerOneMillion}
                </div>
                </div>
                <div className="info-box deaths">
                <div className="info-box-title">Total Deaths</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.deaths}
                </div>
                </div>
                <div className="info-box deaths per_million">
                <div className="info-box-title">Deaths per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.deathsPerOneMillion}
                </div>
                </div>
                <div className="info-box recovered">
                <div className="info-box-title">Total Recovered</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.recovered}
                </div>
                </div>
                <div className="info-box recovered per_million">
                <div className="info-box-title">Recovered per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.recoveredPerOneMillion}
                </div>
                </div>
                <div className="info-box tests">
                <div className="info-box-title">Total Tests</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.tests}
                </div>
                </div>
                <div className="info-box tests per_million">
                <div className="info-box-title">Tests per million</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.testsPerOneMillion}
                </div>
                </div>
                <div className="info-box cases_today">
                <div className="info-box-title">Cases today</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.todayCases}
                </div>
                </div>
                <div className="info-box deaths_today">
                <div className="info-box-title">Deaths today</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.todayDeaths}
                </div>
                </div>
                <div className="info-box recovered_today">
                <div className="info-box-title">Recovered today</div>
                <div className="info-box-stat">
                    {this.props.currentCountry.todayRecovered}
                </div>
                </div>
            </div>
            </div>
        );
        }
    }
}

export default CountryCard;