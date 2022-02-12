import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastCharts';
import Forecast from '../components/Forecast';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper';
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';

const CityPage = ({data, actions}) => {
    const { onSetAllWeather, onSetChartData, onSetforecastItemList } = actions;
    const { allWeather, chartData, forecastItemList } = data;
    const { countryCode, city } = useCityPage(onSetChartData, onSetforecastItemList);
    
    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

    useCityList(cities, allWeather, onSetAllWeather)
    
    const weather = allWeather[getCityCode(city, countryCode)]

    const humidity = weather && weather.humidity;
    const wind = weather && weather.wind; 
    const country = countryCode && getCountryNameByCountryCode(countryCode);
    const state = weather && weather.state;
    const temperature = weather && weather.temperature;
       

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
                        {
                            humidity && wind &&
                            <WeatherDetails wind={wind} humidity={humidity}/>
                        }
                    </Grid>
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress/>
                    }
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData}/>
                    }
                </Grid>

                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList}/>
                    }
                </Grid>

                </Grid>
            </Paper>
        </AppFrame>
    );
};

CityPage.propTypes = {};

export default CityPage;