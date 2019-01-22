import { combineReducers } from "redux";

// Julie : regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";
import FilterEventsReducer from "./filter-events";


const allReducers = combineReducers({
  eventsLoire: ActiveEventsReducer,
  filterEvents: FilterEventsReducer
  //J'amène mon action filterEvents pour la combiner avec "allReducers" (Monica/Nadim)
});

export default allReducers;
