import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CityList from './CityList';

const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Miami", country:"Estados Unidos", countryCode: "US"},
    {city:"La Paz", country:"Bolivia", countryCode: "BO"},
    {city:"Montevideo", country:"Uruguay", countryCode: "UY"},
]

test("CityList click on item", async () => {
    // Se debe simular una aciion del usuario: el click sobre un item
    // Se usa una funcion "mock"
    const fnClickOnItem = jest.fn();

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} onSetAllWeather={""} allWeather={""}/>)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const items = await findAllByRole("button");

    // Ahora se utiliza fireEvent
    // fireEvent es parte de la libreria testing-library

    fireEvent.click(items[0]);

    // Que tiene que suceder? 
    // Se tuvo que llamar a la función fnClickOnItem una unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(2);
})