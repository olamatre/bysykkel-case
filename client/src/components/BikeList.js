import { Avatar, Button, CircularProgress, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { useBikeApi } from "../services/BikeApi/BikeApi.service"

export const BikeList = () => {
    const { isLoading, error, stations } = useBikeApi()

    return (
        <Fragment>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <Fragment>
                    {error != null ? (
                        <Typography>
                            {JSON.stringify(error)}
                        </Typography>
                    ) : (
                        <List>
                          {stations.map((station) => (
                            <ListItem>
                              <ListItemAvatar>
                                {station.numBikesAvailable === 0 ? (
                                  <Avatar>
                                    {station.numBikesAvailable}
                                  </Avatar>
                                ) : (
                                  <Avatar style={{ backgroundColor: '#43A047' }}>
                                    {station.numBikesAvailable}
                                  </Avatar>
                                )}
                              </ListItemAvatar>
                              <ListItemText primary={station.name} secondary={station.address}/>
                              <ListItemSecondaryAction>
                                <Link to={`/${station.stationId}`}>
                                  <Button variant="contained" color="primary">
                                    Se mer
                                  </Button>
                                </Link>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}