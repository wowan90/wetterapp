import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { } from '../store/actions/alertActions';
import { getWeatherForcast} from '../store/actions/weatherActions';

import { IWeatherData } from '../store/types';



interface WeatherProps {
    data: IWeatherData;
}

const Forcast: FC<WeatherProps> = ({ data }) => {
  const dispatch = useDispatch();

  const onClick = () => {    
    dispatch(getWeatherForcast(data.coord.lat,data.coord.lon));
  }
  
  return(
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">         
            <button className="button is-primary is-fullwidth" onClick={onClick} style={{maxWidth: 300, margin: '0 auto'}}>Wettervorhersage</button>
        </div>
      </div>
    </div>
  );  
}

export default Forcast;