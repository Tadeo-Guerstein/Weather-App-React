import moment from 'moment';
import {toCelsius} from '../utils';

const getForecastItemList = (data) => {
    const interval = [5,7,9,13,15,17,21,23,25]
    const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map(item => {
        return ({
            hour: `${moment.unix(item.dt).hour()}:00`,
            weekDay: moment.unix(item.dt).format("dddd"),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelsius(item.main.temp)
        })
    })
    return forecastItemListAux
}

export default getForecastItemList