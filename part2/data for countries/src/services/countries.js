import axios from 'axios'

const url = 'https://restcountries.com/v3.1/all'

const getOne = ({country}) => {
    return axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
}

const getAll = () => {
    return axios.get('https://restcountries.com/v3.1/all')
}

export default {getOne, getAll}