import { Button, CircularProgress, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useBikeApi } from "../services/BikeApi/BikeApi.service"

export const DetailsView = () => {
    const { error, isLoading, stationDetails, getStationDetails } = useBikeApi()
    const { stationId } = useParams()

    useEffect(() => {
        getStationDetails(stationId)
    }, [])

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
                        <Fragment>
                            <Typography>
                                {JSON.stringify(stationDetails)}
                            </Typography>
                            <Link to="/">
                                <Button variant="contained" color="primary">
                                    Tilbake
                                </Button>
                            </Link>
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}