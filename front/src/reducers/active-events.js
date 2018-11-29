<<<<<<< HEAD
const activeEvents = (state ={Event, selectedEvent: "Event"}, action) => {
=======
const activeEvents = (state = { events: [] }, action) => {
>>>>>>> a2d6282e22cdc86e6d358a7f630e5dd7769faabe
  switch (action.type) {

// Julie : déclaration des actions

    case 'UPDATE_EVENTS_LIST':
<<<<<<< HEAD
      return {...state, selectedEvent: action.updateEventsList};
=======
      return { ...state, events: action.updateEventsList };
>>>>>>> a2d6282e22cdc86e6d358a7f630e5dd7769faabe

    case 'ADD_EVENT':
      const evt = state.events;
      evt.push(action.addEvent)
      return { ...state, events: evt };

    default:
      return state

  }
}

export default activeEvents;


// case 'UPDATE_EVENTS_LIST':
// const updateEventsList = action.updateEventsList;
// return { ...state, updateEventsList: event }
