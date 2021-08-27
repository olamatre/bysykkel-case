import { useEffect, useState } from 'react'
import axios from 'axios'

// TODO: Flytt til .env
const baseUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no/'
const stationInfoQuery = 'station_information.json'
const stationStatusQuery = 'station_status.json'

const headers = {
    headers: {
        'Client-Identifier': process.env.REACT_APP_CLIENT_IDENTIFIER,
    },
}

const getStationInformation = async () => {
    let stationInfo = []
    let error = null

    await axios
        .get(baseUrl + stationInfoQuery, headers)
        .then((response) => {
            stationInfo = response.data.data.stations
        })
        .catch((err) => {
            error = err
        })

    return {
        stationInfo,
        error,
    }
}

const getStationStatus = async () => {
    let stationStatus = []
    let error = null

    await axios
        .get(baseUrl + stationStatusQuery, headers)
        .then((response) => {
            stationStatus = response.data.data.stations
        })
        .catch((err) => {
            error = err
        })

    return {
        stationStatus,
        error,
    }
}

const combineStationData = (stationInfoArr, stationStatusArr) => {
    const stations = []

    for (let i = 0; i < stationStatusArr.length; i++) {
        // TODO: Beste algoritme?
        const stationStatus = stationStatusArr[i]
        const stationInfo = stationInfoArr[stationInfoArr.findIndex((el) => {
            return el.station_id === stationStatus.station_id
        })]

        if (stationInfo && stationStatus) {
            stations.push({
                station_id: stationInfo.station_id,
                name: stationInfo.name,
                latitude: stationInfo.lat,
                longitude: stationInfo.lon,
                capacity: stationInfo.capacity,
                num_bikes_available: stationStatus.num_bikes_available,
                num_docks_available: stationStatus.num_docks_available,
                is_installed: stationStatus.is_installed,
                is_renting: stationStatus.is_renting,
                is_returning: stationStatus.is_returning,
                last_reported: stationStatus.last_reported
            })
        }
    }

    return stations
}

export const useBikeApi = () => {
    const [stations, setStations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getStations = async () => {
        setIsLoading(true)
        
        const { stationInfo, stationInfoError } = await getStationInformation()
        const { stationStatus, stationStatusError } = await getStationStatus()

        setError((stationInfoError || stationStatusError) ? {
            stationInfoError,
            stationStatusError,
        } : null)

        let combinedStationData = combineStationData(stationInfo, stationStatus)

        setStations(combinedStationData)

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