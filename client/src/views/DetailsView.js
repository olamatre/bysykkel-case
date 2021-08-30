import { CircularProgress, Typography } from "@material-ui/core"
import { Fragment } from "react"
import { useBikeApi } from "../services/BikeApi/BikeApi.service"

export const DetailsView = (stationId) => {
    const { error, isLoading, stationDetails, getStationDetails } = useBikeApi()

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