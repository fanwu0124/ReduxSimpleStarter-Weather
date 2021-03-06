import axios from 'axios';

const API_KEY = '4292b65623cc445a3863ce1f4d2329a0';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Both action and reducer uses this const to avoid any typo if using string directly.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //axios is a library for ajax calls.
  //request is a promise returned from ajax call.
  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
    //If request is a promise, stop the action. Create a new action after the promise
    //is resolved, and send the action to reducer.
  };
}
