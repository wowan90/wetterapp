import { WeatherAction, GET_WEATHERFORCAST,  SET_LOADING, SET_ERROR, WeatherForcastState } from "../types";

const initialState: WeatherForcastState = {
  data: null,
  loading: false,
  error: ''
}

//Calculate the new state by giving an initialState and and action
//which is an event containing the data to calculate the new state
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: WeatherForcastState = initialState, action: WeatherAction): WeatherForcastState => {
  switch(action.type) {  
   
    case GET_WEATHERFORCAST:
    return {        
        data: action.payload,
        loading: false,
        error: ''
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}