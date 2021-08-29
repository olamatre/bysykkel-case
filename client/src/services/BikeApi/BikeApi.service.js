import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFilter } from '../../store/FilterProvider'

export const useBikeApi = () => {
    const [stations, setStations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { filter } = useFilter()

    const getStations = async (filter = null) => {
        setIsLoading(true)

        var query = `?filterAvailableBikes=${filter.filterWithBikes}&filterAvailableDocks=${filter.filterWithDocks}&sortByClosest=${filter.sortByClosest}`
        const queryCoordinates = `&latitude=${filter.latitude}&longitude=${filter.longitude}`
    
        if (filter.latitude && filter.longitude) {
            query += queryCoordinates
        }

        await axios.get('https://localhost:5001/stations' + query)
            .then(resp => setStations(resp.data))
            .catch(err => setError(err))

        setIsLoading(false)
    }

    useEffect(() => {
        getStations(filter)
    }, [filter])

    return {
        getStations,
        stations,
        isLoading,
        error,
    }
}