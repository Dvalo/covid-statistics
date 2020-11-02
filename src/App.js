import React from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
      activeCountry: [],
    };
    this.setActiveCountry = this.setActiveCountry.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        this.setState({ countriesData: response.data });
        this.getRandomCountry();
      })
      .catch((error) => console.log(error));
  }

  getRandomCountry() {
    let generateRandomInt = Math.floor(
      Math.random() * this.state.countriesData.length
    );
    let getRandomCountry = this.state.countriesData[generateRandomInt];
    this.setState({ activeCountry: getRandomCountry });
  }

  setActiveCountry(country) {
    this.setState({ activeCountry: country });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="covid-tracker">
        <h1 className="section-title">Country Card</h1>
        <p className="section-instructions">
          Random country has been displayed as an example, view instructions
          below to display specific country of your choice.
        </p>
        <CountryCard currentCountry={this.state.activeCountry} />

        <h1 className="section-title">Country List</h1>
        <p className="section-instructions">
          Click on the specific country name to view all the details about the
          country.
        </p>
        <CountryList
          countriesData={this.state.countriesData}
          whenClicked={this.setActiveCountry}
        />
      </div>
    );
  }
}

export default App;
