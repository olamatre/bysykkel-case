import { useEffect, useState } from 'react'
import axios from 'axios'

export const useBikeApi = () => {
    const [stations, setStations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getStations = async () => {
        setIsLoading(true)
        const query = ''

        await axios.get('https://localhost:5001/stations' + query)
            .then(resp => setStations(resp.data))
            .catch(err => setError(err))

        setIsLoading(false)
    }

    useEffect(() => {
        getStations()
    }, [])

    return {
        getStations,
        stations,
        isLoading,
        error,
    }
}