import './App.css'
import { useBikeApi } from './services/BikeApi/BikeApi.service'

import React, { Fragment, useState } from 'react'
import { AppBar, Avatar, Button, CircularProgress, Container, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Toolbar, Typography, Drawer, Fab, ListItemIcon, Checkbox } from '@material-ui/core'
import { DirectionsBike, FilterList } from '@material-ui/icons'

function App() {
  const { stations, isLoading, error, getStations } = useBikeApi()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [filter, setFilter] = useState({
    sortByClosest: true,
    filterWithBikes: false,
    filterWithDocks: false
  })

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpenDrawer(open)
  }

  const handleToggleSortByClosest = (event) => {
    const tempFilter = {...filter, sortByClosest: !filter.sortByClosest}
    // TODO: Call API endpoint with filter
    setFilter(tempFilter)
  }

  const handleToggleFilterWithBikes = (event) => {
    const tempFilter = {...filter, filterWithBikes: !filter.filterWithBikes}
    // TODO: Call API endpoint with filter
    setFilter(tempFilter)
  }

  const handleToggleFilterWithDocks = (event) => {
    const tempFilter = {...filter, filterWithDocks: !filter.filterWithDocks}
    // TODO: Call API endpoint with filter
    setFilter(tempFilter)
  }

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
                <Fragment>
                  <Fab aria-label="filter" position="absolute" onClick={toggleDrawer(true)}>
                    <FilterList />
                  </Fab>
                  <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                    <List>
                      <ListItem button onClick={handleToggleSortByClosest}>
                        <ListItemIcon>
                          <Checkbox ckecked={filter.sortByClosest}/>
                        </ListItemIcon>
                        <ListItemText primary="Vis nærmeste"/>
                      </ListItem>
                      <ListItem button onClick={handleToggleFilterWithBikes}>
                        <ListItemIcon>
                          <Checkbox ckecked={filter.filterWithBikes}/>
                        </ListItemIcon>
                        <ListItemText primary="Vis ledige sykler" />
                      </ListItem>
                      <ListItem button onClick={handleToggleFilterWithDocks}>
                        <ListItemIcon>
                          <Checkbox ckecked={filter.filterWithDocks}/>
                        </ListItemIcon>
                        <ListItemText primary="Vis ledige stativer" />
                      </ListItem>
                    </List>
                  </Drawer>
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
                </Fragment>
              )}
            </Fragment>
          )}
        </Container>
      </main>
    </Fragment>
  );
}

export default App
