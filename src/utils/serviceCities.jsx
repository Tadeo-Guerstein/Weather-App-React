const cities = [
    {city:"Mar del Plata", country: "Argentina", countryCode: "AR"},
    {city:"Miami", country:"Estados Unidos", countryCode: "US"},
    {city:"La Paz", country:"Bolivia", countryCode: "BO"},
    {city:"Montevideo", country:"Uruguay", countryCode: "UY"},
]
export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)