import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import convertUnits from 'convert-units';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

// li: es un item (que tiene como rol "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry;
    console.log(weather);
    return (
        <ListItem button key={getCityCode(city, countryCode)} onClick={eventOnClickCity}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>  
                </Grid>
            </Grid>
        </ListItem>
    );
}

// cities es un array y en cada item tiene que tener las ciudades igual que los paises
const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const apiId = "e90c52a68c04c11a7cfb6bfd8a8a4a8b";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiId}`;
            
            try {
                const response = await axios.get(url);

                const { data } = response;
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
                const state = data.weather[0].main.toLowerCase();

                const propName = getCityCode(city, countryCode);
                const propValue = { temperature, state };

                setAllWeather(allWeather => (
                    {...allWeather, [propName]: propValue}
                ));

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
            setWeather(city, countryCode)
        });
 
    }, [cities]);
    
    return (
        <div>
            {
                error && <Alert onClose={()=>setError(null)} severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    );
};

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
};

export default CityList;
