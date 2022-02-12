import { useEffect, useDebugValue } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {getForecastUrl} from '../utils/urls';
import getChartData from '../utils/transform/getChartdata';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = (onSetChartData, onSetforecastItemList) => {
    const { city, countryCode } = useParams(); //* trae y permite usar los parametros de la url

    useDebugValue(`useCityPage ${city}`)

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({city, countryCode})
            try {
                const { data } = await axios.get(url)
                
                const dataAux = getChartData(data)
                onSetChartData(dataAux)

                const forecastItemListAux = getForecastItemList(data)
                onSetforecastItemList(forecastItemListAux)

            } catch (error) {
                console.log(error)
            }
        }
        getForecast()
    }, [city, countryCode, onSetChartData, onSetforecastItemList]);
    return { countryCode, city }
}

export default useCityPage