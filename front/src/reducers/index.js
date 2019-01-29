import { combineReducers } from "redux";

// Julie : regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";
import FilterEventsReducer from "./filter-events";
import UpdateButtonReducer from "./button-dates";


const allReducers = combineReducers({
  activeEvents: ActiveEventsReducer,
  filterEvents: FilterEventsReducer,
  buttonDates: UpdateButtonReducer
  //J'amène mon action filterEvents pour la combiner avec "allReducers" (Monica/Nadim)
});

export default allReducers;
