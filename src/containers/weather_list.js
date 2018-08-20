import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="tabel table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//function mapSateToProps(state) {
  //return { weather: state.weather };
//}

//ES6 syntax
function mapStateToProps({ weather }) {
  //The input argument works like const weather = state.weather.
  return { weather }; //The same as return { weather: weather};
}

export default connect(mapStateToProps)(WeatherList);