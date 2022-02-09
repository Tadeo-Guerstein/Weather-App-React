import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ForecastItem from '../ForecastItem';

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    // en el test al buscar por id se necesita agregarle al elemento una manera de 
    // identificarlo por id y por eso está el data-testid
    return (
        <Grid data-testid = "forecast-item-container" item key={`${weekDay}${hour}`}>
            <ForecastItem 
                hour={hour} 
                weekDay={weekDay} 
                state={state} 
                temperature={temperature}
            />
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifyContent="space-around" alignItems="center" >
        {
            forecastItemList.map(forecast => renderForecastItem(forecast))
        }
    </Grid>
  );
};

// el forecastItemList es diferente la validacion con el PropTypes
// porque los elementos tienen que tener una forma particular
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired, 
        hour: PropTypes.number.isRequired, 
        state: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
    }))
};

export default Forecast;

