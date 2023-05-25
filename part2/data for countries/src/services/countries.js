import axios from 'axios'

const url = 'https://restcountries.com/v3.1/all'


const getOne = ({country}) => {
    return axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
}

const getAll = () => {
    return axios.get('https://restcountries.com/v3.1/all')
}

const getWeather = ({latlng}) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=d6c3dce39dec49a85c8c929eb1e3d796`)
}


export default {getOne, getAll, getWeather}