import { useState, useEffect } from "react"
import Axios from "axios"

const useFetchHeaders = (endpoint) => {
    const [data, setData ] = useState()
    const [error, setError] = useState()
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_URL_APICASERA}${endpoint}`,{ headers: {"Authorization" : `Bearer ${process.env.REACT_APP_TOKEN_JWT_APICASERA}`} })
        .then(data => setData(data.data))
        .catch(err => setError(err))
    }, [endpoint])

    return [data, error]
}

export default useFetchHeaders