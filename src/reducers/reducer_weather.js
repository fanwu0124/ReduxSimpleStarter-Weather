//import the action type const.
import { FETCH_WEATHER } from '../actions/index';

//Initialize the state as an array.
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //weather data is in action.payload.data.
      //state.push() adds new elements to the original array.
      //state.concat() merges arrays and return a new array.
      //elements from action.payload.data are added after elements in state.
      //return state.concat({action.payload.data});

      //This ES6 syntax works the same as concat(). Also returns a new array.
      //elements from action.payload.data are inserted to the front of elements in state.
      return [action.payload.data, ...state]; //ES6 syntax
  }
  return state;
}
