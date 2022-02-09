import React from 'react';
import Grid from '@material-ui/core/Grid';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastCharts';
import Forecast from '../components/Forecast';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper';

const CityPage = () => {
    const country = "Argentina";
    const city = "Buenos Aires";
    const state = "cloudy";
    const temperature = 10;
    const humidity = 40;
    const wind = 20;
    const forecastItemList = [
        {
            weekDay: "Tuesday", 
            hour: 10,
            state: "clouds",
            temperature: 22
        },
        {
            weekDay: "Wednesday", 
            hour: 22,
            state: "clear",
            temperature:33
        },
        {
            weekDay: "Thursday", 
            hour: 12,
            state: "rain",
            temperature: 25
        }
    ]

    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]

    return( 
        <AppFrame>
            <Paper elevation={4}>
                <Grid container justifyContent="center" direction="column" spacing={2}>

                <Grid item container xs={12} justifyContent="center" alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>

                <Grid container item xs={12} alignItems="center">
                    <Grid item xs={8}>
                        <Weather state={state} temperature={temperature}/>
                    </Grid>

                    <Grid item xs={4}>
                        <WeatherDetails wind={wind} humidity={humidity}/>
                    </Grid>
                </Grid>

                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>

                <Grid item>
                    <Forecast forecastItemList={forecastItemList}/>
                </Grid>

                </Grid>
            </Paper>
        </AppFrame>
    );
};

CityPage.propTypes = {};

export default CityPage;