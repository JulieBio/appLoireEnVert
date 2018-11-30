import { combineReducers } from "redux";

// Julie : regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";

const allReducers = combineReducers({
  activeEvents: ActiveEventsReducer
});

export default allReducers;
