import { combineReducers } from 'redux';

import ActiveEventsReducer from './active-events';

const allReducers = combineReducers({
    activeEvents: ActiveEventsReducer,
})

export default allReducers;
