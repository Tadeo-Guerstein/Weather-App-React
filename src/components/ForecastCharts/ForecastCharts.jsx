import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const ForecastCharts = ({ data }) => {
return (
    <div>
        <ResponsiveContainer height={250} width={"95%"} >
            <LineChart 
                margin={{top:20, bottom: 20, left: 5, right: 5}} 
                data={data}>
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="max" stroke="#FF0000"/>
                <Line type="monotone" dataKey="min" stroke="#0000FF"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
);
};

ForecastCharts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
    dayHour: PropTypes.string.isRequired, 
    min: PropTypes.number.isRequired, 
    max: PropTypes.number.isRequireddayHour
}))
};

export default ForecastCharts;