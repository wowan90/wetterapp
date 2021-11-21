import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Forcast from './components/Forcast';
import Alert from './components/Alert';
import WeatherToday from './components/WeatherToday';
import WeatherForcast from './components/WeatherForcast';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

const App: FC = () => {
  // modify state by dispatching actions
  const dispatch = useDispatch();

  //Get state from Store by useSelector
  const weatherData = useSelector((state : RootState) => state.weather.data);
  const weatherForcastData = useSelector((state : RootState) => state.weatherforcast.data)

  
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <>
    <div className="has-text-centered">
      <Search title="Bitte Namen der gesuchten Stadt eingeben" />
      {loading ? <h2 className="is-size-2 py-1">Loading...</h2> : weatherData && <WeatherToday data={weatherData} />}
      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      {weatherData && <Forcast data={weatherData} />}
    </div>
    <div className="has-text-centered">
      {loading ? <h2 className="is-size-3 py-3">Loading...</h2> : weatherForcastData && <WeatherForcast data={weatherForcastData} />}
    </div>
    </>
  );
}

export default App;