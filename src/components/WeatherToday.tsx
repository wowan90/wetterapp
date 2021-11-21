import React, { FC} from "react";
import { IWeatherData } from '../store/types';


interface WeatherProps {
    data: IWeatherData;
   
}

const WeatherToday: FC <WeatherProps> = ({ data }) => {

    const celsius = (data.main.temp - 273.15).toFixed(2);

    return(
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered">
                    {data.name} - {data.sys.country}
                </h1>
                <div className="level" style={{alignItems: 'flex-start'}}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.weather[0].description}</p>
                            <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Temperatur</p>
                            <div className="title">
                                <p className="mb-2">{celsius}°C</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    );
}

export default WeatherToday;