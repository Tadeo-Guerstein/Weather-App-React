import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Miami", country:"Estados Unidos", countryCode: "US"},
    {city:"La Paz", country:"Bolivia", countryCode: "BO"},
    {city:"Montevideo", country:"Uruguay", countryCode: "UY"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click on city")}/>