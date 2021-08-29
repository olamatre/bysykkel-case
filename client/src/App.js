import './App.css'
import React, { Fragment } from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import { DirectionsBike } from '@material-ui/icons'
import { Filter } from './components/Filter'
import { BikeList } from './components/BikeList'
import { FilterProvider } from './store/FilterProvider'

function App() {

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
