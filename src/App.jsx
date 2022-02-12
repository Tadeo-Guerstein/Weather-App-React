import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    const [allWeather, setAllWeather] = useState({});
    const [chartData, onSetChartData] = useState(null);
    const [forecastItemList, onSetforecastItemList] = useState(null);

    const onSetAllWeather = useCallback((weathercity) => {
            setAllWeather(allWeather => {
                return ({ ...allWeather, ...weathercity})
            })
        }, [setAllWeather])
    
    const actions = useMemo(() => (
        {
            onSetAllWeather, 
            onSetChartData, 
            onSetforecastItemList
        }
    ), [onSetAllWeather, onSetChartData, onSetforecastItemList])
    
    const data = useMemo(() => (
        {
            allWeather, chartData, forecastItemList
        }
    ), [allWeather, chartData, forecastItemList])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage/>
                </Route>

                <Route path="/main">
                    <MainPage data={data} actions={actions}/>
                </Route>

                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions}/>
                </Route>

                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
