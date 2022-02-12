import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import useCityList from '../../hooks/useCityList';
import {getCityCode} from '../../utils/utils'
import Weather from '../Weather';



// li: es un item (que tiene como rol "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {

    const { city, countryCode, country } = cityAndCountry;
    return (
        <ListItem 
            button 
            key={getCityCode(city, countryCode)} 
            onClick={() => eventOnClickCity(city, countryCode)}
        >
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
const CityList = ({ cities, onClickCity, actions, data }) => {
    const { onSetAllWeather } = actions;
    const { allWeather } = data;

    const { error, setError } = useCityList(cities, allWeather, onSetAllWeather)
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