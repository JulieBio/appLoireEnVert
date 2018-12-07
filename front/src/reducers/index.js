import { combineReducers } from "redux";

// Julie : regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";
import FilterEventsReducer from "./filter-events";

const allReducers = combineReducers({
  activeEvents: ActiveEventsReducer,
  filterEvents: FilterEventsReducer
});

export default allReducers;
