import { Config } from "../config";
import Axios from 'axios';


const RootURL = `${Config.forecastBaseURL}?appid=${Config.forecastKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${RootURL}&q=${city},us`;
    const Request = Axios.get(URL);

    return {
        type: FETCH_WEATHER,
        payload: Request
    }
}
