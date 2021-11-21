import { WeatherState, WeatherAction, GET_WEATHERTODAY, SET_LOADING, SET_ERROR } from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: ''
}

//calculate the new state by giving an initialState and and action
//which is an event containing the data to calculate the new state
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch(action.type) {
   
    case GET_WEATHERTODAY:
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