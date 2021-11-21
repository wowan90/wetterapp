import React, { FC } from "react";
import {  IDaily } from '../store/types';
import { calcCelsisus }  from '../util/util'

interface WeatherForcastProps {
    date: string,    
    day: IDaily,    
}

// This component represents each day in the forcast
const WeekDay: FC <WeatherForcastProps> = ({ date, day, }) => { 
    return(
            <div className="level" style={{alignItems: 'flex-start'}}>                                  
                <div className="level-item has-text-centered">                        
                    <div>
                        <div>
                            <h1 className="has-text-centered">{date}</h1>   
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