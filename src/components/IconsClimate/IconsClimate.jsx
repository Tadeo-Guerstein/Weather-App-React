import React from 'react';
import PropTypes from 'prop-types';

import { WiDaySunny, WiDayCloudy, WiDaySnow, WiDayRainMix, WiRaindrop, WiThunderstorm } from 'react-icons/wi';

export const validValues = ["clouds", "snow", "clear", "rain", "drizzle", "thunderstorm"]


const stateByName = {
    clouds: WiDayCloudy,
    snow: WiDaySnow,
    clear: WiDaySunny,
    rain: WiDayRainMix,
    thunderstorm: WiThunderstorm,
    drizzle: WiRaindrop
}


const IconsClimate = ({ state }) => {
    const StateByName = stateByName[state];
    return (
        <StateByName/>
    );
};

IconsClimate.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
};

export default IconsClimate