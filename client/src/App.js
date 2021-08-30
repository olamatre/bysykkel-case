import './App.css'
import React, { Fragment } from 'react'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DirectionsBike } from '@material-ui/icons'
import { BikeListView } from './views/BikeListView'
import { DetailsView } from './views/DetailsView'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <DirectionsBike fontSize="large"/>
          <Typography variant="h6">
            Oslo Bysykkel
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Router>
            <Switch>
              <Route path="/">
                <BikeListView />
              </Route>
              <Route path="/:stationId">
                <DetailsView />
              </Route>
            </Switch>
          </Router>
        </Container>
      </main>
    </Fragment>
  );
}

export default App
