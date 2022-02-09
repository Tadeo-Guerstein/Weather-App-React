import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {
        weekDay: "Tuesday", 
        hour: 10,
        state: "clouds",
        temperature: 22
    },
    {
        weekDay: "Wednesday", 
        hour: 22,
        state: "clear",
        temperature:33
    },
    {
        weekDay: "Thursday", 
        hour: 12,
        state: "rain",
        temperature: 25
    }
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}/>