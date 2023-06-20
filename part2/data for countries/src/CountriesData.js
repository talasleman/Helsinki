import { useState, useEffect } from 'react'
import countriesService from './services/countries'

const CountriesData = (props) => {
    const [showIndex, setShowIndex] = useState(-1)
    const [weather, setWeather] = useState('')
    const [country, setCountry] = useState(null)

    useEffect(() => {
        setShowIndex(-1)
    }, [props.countries])

    useEffect(() => {
        if (props.countries.length === 1) {
            const currentCountry = props.countries[0]
            setCountry(currentCountry)
            const latlng = currentCountry.capitalInfo.latlng
            countriesService.getWeather({latlng}).then(response => 
                setWeather({
                    'temp' : (response.data.main.temp - 273.15).toFixed(2),
                    'icon' : (response.data.weather[0].icon),
                    'wind' : (response.data.wind.speed)
                })
            )
        }
    }, [props.countries])

    if (props.countries.length > 10)
    {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    if (props.countries.length < 10 && props.countries.length > 1)
    {
        return (
            <div>
                {props.countries.map((country,index) => <div key ={index}>
                    <h3>{country.name.common}<button onClick ={() => {setShowIndex(index)}}>show</button></h3>
                    {showIndex === index && <CountriesData countries={[country]} />}
                    </div>)}
                
            </div>
        )
    }
    if (country && weather)
    {

        const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`
        
        return (
            <div className='data'>
                <h1>{country.name.common} {country.flag}</h1>
                <div>Capital : {country.capital}</div>
                <div>Region : {country.region}</div>
                <p>Languages:</p>
                
                <div>
                    {Object.values(country.languages).map((lang, index) => <li key={index}>{lang}</li>)}
                </div>
                <h1>Weather in {country.capital}</h1>
                <div>
                    <p>Temperature : {weather.temp} celsius</p>
                    <p>{weather.icon && <img src={iconUrl}></img>}
                        </p>
                    <p>Wind speed : {weather.wind}</p>
                </div>
                

                
            </div>
        )
    }
}


export default CountriesData