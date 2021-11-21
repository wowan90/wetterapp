import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';
import weatherForcastReducer from './reducers/weatherForcastReducer';

// create single reducer function
const rootReducer = combineReducers({
  weather: weatherReducer,
  weatherforcast: weatherForcastReducer,
  alert: alertReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;