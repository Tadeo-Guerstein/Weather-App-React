import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import useCityList from '../../hooks/useCityList';
import {getCityCode} from '../../utils/utils';
import CityListItem from '../CityListItem/CityListItem';

// li: es un item (que tiene como rol "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode } = cityAndCountry
    return <CityListItem key={getCityCode(city, countryCode)} eventOnClickCity={eventOnClickCity} weather={weather} {...cityAndCountry}/>
}

// cities es un array y en cada item tiene que tener las ciudades igual que los paises
const CityList = React.memo(({ cities, onClickCity, actions, data }) => {
    const { allWeather } = data;

    const { error, setError } = useCityList(cities, allWeather, actions)
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
});

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
};

CityList.displayName="CityList"

export default CityList;