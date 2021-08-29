import './App.css'
import { useBikeApi } from './services/BikeApi/BikeApi.service'

import React, { Fragment } from 'react'
import { AppBar, Avatar, Button, CircularProgress, Container, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { DirectionsBike } from '@material-ui/icons'

function App() {
  const { stations, isLoading, error, getStations } = useBikeApi()

  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar>
          <DirectionsBike />
          <Typography variant="h6">
            Oslo Bysykkel
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          {error != null ? (
            <Typography>
              {JSON.stringify(error)}
            </Typography>
          ) : (
            <Fragment>
              {isLoading ? (
                <CircularProgress />
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
                          <Avatar style={{ backgroundColor: 'blue' }}>
                            {station.numBikesAvailable}
                          </Avatar>
                        )}
                      </ListItemAvatar>
                      <ListItemText primary={station.name} secondary={station.address}/>
                      <ListItemSecondaryAction>
                        <Button variant="contained" color="primary">
                          Se mer
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </Fragment>
          )}
        </Container>
      </main>
    </Fragment>
  );
}

export default App
