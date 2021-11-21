import { ThunkAction } from 'redux-thunk';
import {RootState } from '..';
import { WeatherAction, IWeatherData, IWeatherForcastData, IWeatherError, GET_WEATHERTODAY, SET_LOADING, SET_ERROR, GET_WEATHERFORCAST } from '../types'

export const getWeather = (cityName: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e90c61a2d1edcc1a4213540709cf618c&lang={de}`);
        
            if(!res.ok) {
                const resData: IWeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: IWeatherData = await res.json();
            dispatch( {
                type: GET_WEATHERTODAY,
                payload: resData
            });
        }catch(err : any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }     
    }
}

export const getWeatherForcast = (lat: number, lon: number): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=e90c61a2d1edcc1a4213540709cf618c&lang&lang={de}`);
        
            if(!res.ok) {
                const resData: IWeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: IWeatherForcastData = await res.json();
            dispatch( {
                type: GET_WEATHERFORCAST,
                payload: resData
            });
        }catch(err : any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }     
    }
}

export const setLoading = (): WeatherAction => {
return {
    type: SET_LOADING
    }   
}

export const setError= (): WeatherAction => {
return {
    type: SET_ERROR,
    payload: ''
    }   
}

