import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from'@material-ui/core/Typography';
import Skeleton from'@material-ui/lab/Skeleton';
import IconsClimate, {validValues} from '../IconsClimate';
import { IconContext } from 'react-icons'

const Weather = ({ temperature, state }) => {
return (
    <Grid container item direction="row" justifyContent="center" alignItems="center" >
        <IconContext.Provider value={{ size:'5em' }}>
            {
                state ?
                <IconsClimate state={state}/> 
                :
                <Skeleton variant="circle" height={80} width={80}></Skeleton> 
            }
        </IconContext.Provider>
        {
            temperature ?
            <Typography display="inline" variant="h2">{temperature}</Typography>
            :
            <Skeleton variant="rect" height={80} width={80}></Skeleton> 

        }
    </Grid>
);
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
};

export default Weather;