import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; // SUT: Subject under testing


test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Buenos Aires";
    const country = "Argentina";

    // REnder: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso vamos a utilizas "findAllByRole" para consultar a nuestro componente
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)

    // Assert
    // findAllBuRole nos va a buscar todos los componentes que sean heading => H1, H2, H3
    // El resultado es un array de componentes
    const cityandCountryComponent = await findAllByRole("heading");

    // Cuando el test va a ser correct?
    // Cuando en el primero elemento (heading) se encuentre la ciudad "Buenos Aires"
    // y cuando en el segundo elemento se encuentre el pais Argentina

    expect(cityandCountryComponent[0]).toHaveTextContent(city);
    expect(cityandCountryComponent[1]).toHaveTextContent(country);

    // Si estas condiciones se cumplen, el test está ok
})