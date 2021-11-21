import React, { FC} from "react";
import {  IWeatherForcastData } from '../store/types';
import  WeekDay  from './WeekDay';


interface WeatherForcastProps {
    data: IWeatherForcastData;
}

const WeatherForcast: FC <WeatherForcastProps> = ({ data }) => {
  
    return(
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered">
                    Wettervorhersage
                </h1>
                <div className="level" style={{alignItems: 'flex-start'}}>  
                {data.daily.map(day => (

                <WeekDay   datetime={day.dt} day= {day} /> 
           
                ))}

                </div>
             </div> 
        </section>
        
    );
}

export default WeatherForcast;