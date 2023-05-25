import { useState } from 'react'

const CountriesData = (props) => {
    const [showIndex, setShowIndex] = useState(-1)

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
                    {country.name.common}
                    <button onClick ={() => {setShowIndex(index)}}>show</button>
                    {showIndex === index && <CountriesData countries={[country]} />}
                    </div>)}
                
            </div>
        )
    }
    if (props.countries.length === 1)
    {
        const country = props.countries[0]
        
        return (
            <div>
                <h1>{country.name.common} {country.flag}</h1>
                <div>{country.capital}</div>
                <div>{country.region}</div>
                <p>languages:</p>
                
                <div>
                    {Object.values(country.languages).map((lang, index) => <li key={index}>{lang}</li>)}
                </div>
                

                
            </div>
        )
    }
}


export default CountriesData