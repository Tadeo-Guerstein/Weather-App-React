import { useEffect, useState } from 'react';
import axios from 'axios';
import {getWeatherUrl} from '../utils/urls';
import getAllWeather from '../utils/transform/getAllWeather';
import { getCityCode } from '../utils/utils';

const useCityList = ( cities, allWeather, actions ) => {
    
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city, countryCode})
            
            try {
                const propName = getCityCode(city, countryCode)
                
                // onSetAllWeather({ [propName]: {}});
                actions({ type: "SET_ALL_WEATHER", payload: {[propName]: {}}})
                
                const response = await axios.get(url);

                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                // onSetAllWeather(allWeatherAux);
                actions({ type: "SET_ALL_WEATHER", payload: allWeatherAux})
            } catch (error) {
                if(error.response){ // errores que nos responde el server
                    setError("An error ocurred in the server")
                }
                else if(error.request){ // errores que suceden por no llegar al server
                    setError("Check your Wi-Fi")
                }
                else { // errores imprevistos
                    setError("Error on getting the data")

                }
            }
        }
        
        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)]){
                setWeather(city, countryCode)
            }
        });
 
    }, [cities, actions, allWeather]);

    return { error, setError }
}

export default useCityList