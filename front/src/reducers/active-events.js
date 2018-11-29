const activeEvents = (state ={Event, selectedEvent: "Event"}, action) => {
  switch (action.type) {

    case 'UPDATE_EVENTS_LIST':
      return {...state, selectedEvent: action.updateEventsList};

    case 'ADD_EVENT':
      return action.addEvent

    default:
      return state

  }
}

export default activeEvents;


// case 'UPDATE_EVENTS_LIST':
// const updateEventsList = action.updateEventsList;
// return { ...state, updateEventsList: event }

// case 'ADD_EVENT':
// const addEvent = action.addEvent;
// return { ...state, addEvent: events }