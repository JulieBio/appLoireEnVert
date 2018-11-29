const activeEvents = (state = { events: [] }, action) => {
  switch (action.type) {

// Julie : déclaration des actions

    case 'UPDATE_EVENTS_LIST':
      return { ...state, events: action.updateEventsList };

    case 'ADD_EVENT':
      const evt = state.events;
      evt.push(action.addEvent)
      return { ...state, events: action.event };

    default:
      return state

  }
}

export default activeEvents;


// case 'UPDATE_EVENTS_LIST':
// const updateEventsList = action.updateEventsList;
// return { ...state, updateEventsList: event }
