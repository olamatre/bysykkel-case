import './App.css'
import { useBikeApi } from './services/BikeApi/BikeApi.service'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { DirectionsBike } from '@material-ui/icons'

function App() {
  const { stations, isLoading, error, getStations } = useBikeApi()

  return (
    <AppBar position="relative">
      <Toolbar>
        <DirectionsBike />
        <Typography variant="h6">
          Oslo Bysykkel
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App
