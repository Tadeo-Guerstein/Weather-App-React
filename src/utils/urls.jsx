
const apiId = "e90c52a68c04c11a7cfb6bfd8a8a4a8b";

export const getWeatherUrl = ({city,countryCode}) => ( 
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiId}`
)

export const getForecastUrl = ({city,countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiId}`
)
            