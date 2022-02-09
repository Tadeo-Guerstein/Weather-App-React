/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';

test("ForecastItem render", async () => {
    const { findByText } = render(
        <ForecastItem 
            temperature={10} 
            state={"snow"} 
            hour={19} 
            weekDay={"Monday"}
        />
    );

    const temperature = await findByText(/10/);
    const hour = await findByText(/19/);
    const weekDay = await findByText("Monday");

    expect(temperature).toHaveTextContent(10+"°");
    expect(hour).toHaveTextContent(19);
    expect(weekDay).toHaveTextContent("Monday");
})