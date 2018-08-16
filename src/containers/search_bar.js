import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    //"this" becomes a different context in callbacks, then it fails in this.setState
    //inside of onInputChange because "this" here is not SearchBar anymore.
    //Need use bind to create a new function with the "this" inside of onInputChange referenced to SearchBar.
    //And then replace onInputChange function with the new function.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault(); //Prevent the default submit function for a form.


  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          vlaue={this.state.term}
          //Can also use () => without bind, but performance is not good.
          //https://reactjs.org/docs/handling-events.html
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
