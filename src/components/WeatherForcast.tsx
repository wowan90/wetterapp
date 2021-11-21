import React, { FC} from "react";
import {  IWeatherForcastData } from '../store/types';
import  WeekDay  from './WeekDay';
import {getCurrentDate} from '../util/util';


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
                
                {/* Iterate trough all days and calculate the date    */}
                {data.daily.map((day,index) => (               
                <WeekDay date= { getCurrentDate('-' ,index + 1) } day= { day }/>            
                ))}
                </div>
             </div> 
        </section>        
    );
}

export default WeatherForcast;