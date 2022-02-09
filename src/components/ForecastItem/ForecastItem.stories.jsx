import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: "ForecastItems",
    component: ForecastItem
}

export const MondayWindy = () => 
    <ForecastItem 
        weekDay="Monday" 
        hour="19" 
        state="snow"
        temperature={-10}
    />