import { useState, useEffect } from "react"
import Axios from "axios"

const useFetch = (endpoint) => {
    const [data, setData ] = useState()
    const [error, setError] = useState()
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_URL_APIMARVEL}${endpoint}&apikey=${process.env.REACT_APP_TOKEN_APIMARVEL}`)
        .then(data => setData(data.data.data.results))
        .catch(err => setError(err))
    }, [endpoint])

    return [data, error]
}

export default useFetch