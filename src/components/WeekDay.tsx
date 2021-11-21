import React, { FC} from "react";
import {  IWeatherForcastData } from '../store/types';
import {  IDaily } from '../store/types';



interface WeatherForcastProps {
    
    datetime: number,    
    day: IDaily,    
}

const WeekDay: FC <WeatherForcastProps> = ({ datetime, day, }) => { 

    function calcCelsisus(temp:number){
        const celsius = (temp - 273.15).toFixed(2);
        return  celsius
    }

    return(
                <div className="level" style={{alignItems: 'flex-start'}}>                   
                   
                    <div className="level-item has-text-centered">                        
                        <div>
                            <div>
                                <h1 className="heading has-text-centered">{datetime}</h1>   
                                <br/>                         
                                </div>
                                    <p className="heading">{day.weather[0].description}</p>
                                    <p className="title"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt=""/></p>
                                    <p className="heading">Temperatur</p>
                                <div className="title">
                                    {/* hier soll eine funktion aufgerufen werden, welche die Temperatur in Grad Celsius umrechnet. */}
                                    <p className="mb-2">{calcCelsisus(day.temp.day)}°C</p>
                            </div>
                        </div>                      
                    </div>                 
                </div>
          
        
    );
}

export default WeekDay;