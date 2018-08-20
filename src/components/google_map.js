import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    //Create new google map object
    new google.maps.Map(this.refs.map, { //this.refs.map is the HTML element where this google map will be embedded.
      zoom: 12, //The level of zooming
      center: { //Defines where the map will be centered.
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return (
      <div ref="map" /> //Add "map" to this.refs.
    );
  }
}
