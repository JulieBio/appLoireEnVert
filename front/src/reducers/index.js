import { combineReducers } from "redux";

// Julie : regroupe tous les Reducers

import ActiveEventsReducer from "./active-events";

//Marion : regroupe reducers test
import ActiveTestReducer from "./active-test.js"

const allReducers = combineReducers({
  activeEvents: ActiveEventsReducer,
  activeTest: ActiveTestReducer
});

export default allReducers;
