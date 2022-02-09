import React from 'react';
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails';

// findByText: permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails humidity={22} wind={5}/>)

    // Al utilizar las barras significa que le pasamos una expresion regular, o sea 
    // se utiliza REGEXP y lo que significa es que busca que esa expresion este en alguna
    // parte del componente
    const wind = await findByText(/5/);
    const humidity = await findByText(/22/);

    expect(wind).toHaveTextContent("Wind: 5km/h");
    expect(humidity).toHaveTextContent("Humidity: 22%");
})