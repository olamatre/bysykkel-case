import { CircularProgress, Typography } from "@material-ui/core"
import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { useBikeApi } from "../services/BikeApi/BikeApi.service"

export const DetailsView = () => {
    const { error, isLoading, stationDetails, getStationDetails } = useBikeApi()
    const { stationId } = useParams()

    getStationDetails(stationId)

    return (
        <Fragment>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <Fragment>
                    {error !== null ? (
                        <Typography>
                            {JSON.stringify(error)}
                        </Typography>
                    ) : (
                        <Typography>
                            {JSON.stringify(stationDetails)}
                        </Typography>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}