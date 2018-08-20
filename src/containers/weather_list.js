import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //const temps = cityData.list.map(weather => weather.main.temp);
    //Convert tempearture from K to C.
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="blue" units="C" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="kPa" />
        </td>
        <td>
          <Chart data={humidities} color="red" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPs)</th>
            <th>Humidity (%)</th>
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
