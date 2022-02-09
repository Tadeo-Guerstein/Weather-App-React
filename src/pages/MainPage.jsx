import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper';


const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Miami", country:"Estados Unidos", countryCode: "US"},
    {city:"La Paz", country:"Bolivia", countryCode: "BO"},
    {city:"Montevideo", country:"Uruguay", countryCode: "UY"},
]

const MainPage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        // permite trabajar con la URL y cambiarla por programación
        history.push("/city");
    }
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    );
};

MainPage.propTypes = {};

export default MainPage;
