import Filter from "./Filter";
import countriesService from "./services/countries";
import {useState, useEffect} from 'react'
import CountriesData from "./CountriesData";

const App = () => {

  const[newFilter, setNewFilter] = useState('')
  const[countries, setCountries] = useState([])
  const[currentCountries, setCurrentCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    countriesService
    .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  
  useEffect(() => {
      setCurrentCountries(countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()) === true))
    },[newFilter])

  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  return (
    <div>
      {currentCountries.length}
      <Filter filter={newFilter} handleFilterChange={handleFilterChange}></Filter>
      <CountriesData countries={currentCountries}></CountriesData>
    </div>
  )
}

export default App;
