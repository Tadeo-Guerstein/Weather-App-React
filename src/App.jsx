import React, { useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const initialValue = {
    allWeather: {}, 
    allChartData: {}, 
    allForecastItemList: {}
}

const App = () => {
    

    const reducer = useCallback((state, action) => {
        switch (action.type) {
            case "SET_ALL_WEATHER":
                const weathercity = action.payload
                const newAllWeather = { ...state.allWeather, ...weathercity }
                return { ...state, allWeather: newAllWeather}

            case "SET_CHART_DATA":
                const chartDataCity = action.payload 
                const newAllChartData = { ...state.allChartData, ...chartDataCity}
                return { ...state, allChartData: newAllChartData}

            case "SET_FORECAST_ITEM_LIST":    
                const forecastItemListCity = action.payload
                const newAllForecastItemList = {...state.allForecastItemList, ...forecastItemListCity}
                return { ...state, allForecastItemList: newAllForecastItemList}

            default:
                return state
        }
    }, [])

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage/>
                </Route>

                <Route path="/main">
                    <MainPage data={state} actions={dispatch}/>
                </Route>

                <Route path="/city/:countryCode/:city">
                    <CityPage data={state} actions={dispatch}/>
                </Route>

                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
