import { combineReducers } from "redux";

// regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";
import FilterEventsReducer from "./filter-events";
import UpdateButtonReducer from "./button-dates";


const allReducers = combineReducers({
  activeEvents: ActiveEventsReducer,
  filterEvents: FilterEventsReducer,
  buttonDates: UpdateButtonReducer
});

export default allReducers;
