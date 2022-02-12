import {getCityCode, toCelsius} from '../utils';
import { validValues } from '../../components/IconsClimate'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response;

    const temperature = toCelsius(data.main.temp);
    const humidity = data.main.humidity;
    const wind = data.wind.speed; 
    const stateServer = data.weather[0].main.toLowerCase();

    const state = validValues.includes(stateServer) ? stateServer : null

    const propName = getCityCode(city, countryCode);
    const propValue = { temperature, state, humidity, wind };

    return ({[propName]: propValue})
}

export default getAllWeather