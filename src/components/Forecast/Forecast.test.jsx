/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';

const forecastItemList = [
    { weekDay: "Tuesday", hour: 10, state: "clouds", temperature: 22 },
    { weekDay: "Wednesday", hour: 22, state: "clear", temperature: 33 },
    { weekDay: "Thursday", hour: 12, state: "rain", temperature: 25 }
]

test('Forecast render', async () => {

    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>);

    const forecastItems = await findAllByTestId("forecast-item-container");

    expect(forecastItems).toHaveLength(3);
})