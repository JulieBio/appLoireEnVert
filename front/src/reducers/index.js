import { combineReducers } from "redux";


import ActiveMoviesReducer from "./active-movies";


const allReducers = combineReducers({
  activeMovies: ActiveMoviesReducer,

});

export default allReducers;
