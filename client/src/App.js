import './App.css'
import React, { Fragment } from 'react'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { DirectionsBike } from '@material-ui/icons'
import { Filter } from './components/Filter'
import { BikeList } from './components/BikeList'
import { FilterProvider } from './store/FilterProvider'

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
          <FilterProvider>
            <Filter />
            <BikeList />
          </FilterProvider>
        </Container>
      </main>
    </Fragment>
  );
}

export default App
