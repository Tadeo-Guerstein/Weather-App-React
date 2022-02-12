import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper';
import { getCities } from '../utils/serviceCities';



const MainPage = ({actions, data}) => {
    const history = useHistory();

    const onClickHandler = (city, countryCode) => {
        // permite trabajar con la URL y cambiarla por programación
        history.push(`/city/${countryCode}/${city}`);
    }
    
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList 
                    actions={actions}
                    data={data}
                    cities={getCities()} 
                    onClickCity={onClickHandler} 
                />
            </Paper>
        </AppFrame>
    );
};

MainPage.propTypes = {};

export default MainPage;
