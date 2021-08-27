import './App.css';
import { useBikeApi } from './services/BikeApi/BikeApi.service';

function App() {
  const { stations, isLoading, error, getStations } = useBikeApi()

  return (
    <div>
      {error !== null ? (
        <div>
          {error?.toString()}
        </div>
      ) : null}
      {isLoading ? (
        <div>Loading...</div>
      ) : null}
      <table>
        <thead>
          <tr>
            <td>Navn</td>
            <td>Tilgjengelighet</td>
          </tr>
        </thead>
        <tbody>
          {stations.map((station) => (
            <tr key={JSON.stringify(station)}>
              <td>{station.name}</td>
              <td>{`${station.num_bikes_available} / ${station.num_bikes_available + station.num_docks_available}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={getStations}>Refresh</button>
    </div>
  );
}

export default App;
