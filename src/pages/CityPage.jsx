import React, { useState, useEffect} from 'react';
import axios from 'axios';
import convertUnits from 'convert-units';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastCharts';
import Forecast from '../components/Forecast';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper';

const forecastItemListExample = [
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

const dataExample = [
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

const CityPage = () => {
    const [data, setData] = useState(null);
    const [forecastItemList, setforecastItemList] = useState(null);

    const { city, countryCode } = useParams(); //* trae y permite usar los parametros de la url

    useEffect(() => {
        const getForecast = async () => {
            const apiId = "e90c52a68c04c11a7cfb6bfd8a8a4a8b";
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiId}`
            try {
                const { data } = await axios.get(url)

                console.log("data:", data);

                const toCelsius = (temp) => convertUnits(temp).from("K").to("C").toFixed(0)
                const daysAhead = [0,1,2,3,4,5];
                const days = daysAhead.map(day => moment().add(day, 'd'))
                const dataAux = days.map(day => {
                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    const temps = tempObjArray.map(item => item.main.temp)
                    
                    // dayHour, min, max
                    return ({
                        dayHour: day.format("ddd"),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps))
                    })
                })
                setData(dataAux)

                const interval = [4,6,8,12,14,16,20,22,24]
                const forecastItemListAux = data.list
                .filter((item, index) => interval.includes(index))
                .map(item => {
                    return ({
                        hour: moment.unix(item.dt).hour(),
                        weekDay: moment.unix(item.dt).format("dddd"),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: toCelsius(item.main.temp)
                    })
                })
                setforecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }
        }
        getForecast()
    }, [city, countryCode]);
    
    const country = "Argentina";
    const state = "clouds";
    const temperature = 10;
    const humidity = 40;
    const wind = 20;
    

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
                    {
                        data && <ForecastChart data={data}/>
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