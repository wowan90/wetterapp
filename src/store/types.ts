export const GET_WEATHERTODAY = 'GET_WATHERTODAY';
export const GET_WEATHERFORCAST = 'GET_WEATHERFORCAST';
export const SET_WEATHERFORCAST = 'SET_WEATHERFORCAST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IDaily {
    dt: number,
    temp: {
        day: number,
        min: number,
        max: number};              
    weather: IWeather[];
}

export interface IWeatherData
{
    coord: {
        lon: number;
        lat: number;
    }
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    
    dt: number;
    id: number;
    main: {
        feels_like:number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind:{
        speed: number;
        deg: number;
    };    
}

export interface IWeatherForcastData{
    
    daily: [        
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        },
         { dt: number,
          temp: {
              day: number,
              min: number,
              max: number};              
          weather: IWeather[];        
        }      
    ]         

}

export interface IWeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: IWeatherData | null;
    loading: boolean;
    error: string;
}

export interface WeatherForcastState {
    data: IWeatherForcastData | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction {
    type: typeof GET_WEATHERTODAY;
    payload: IWeatherData;
}

interface GetWeatherForcast {
    type: typeof GET_WEATHERFORCAST;
    payload: IWeatherForcastData;
}

interface SetWeatherForcast {
    type: typeof SET_WEATHERFORCAST;
    payload: null;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction | GetWeatherForcast | SetWeatherForcast ;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string
}

export interface AlertState {
    message: string;
}