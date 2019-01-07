const activeEvents = (state = { events: [] }, action) => {
  switch (action.type) {

// Julie : déclaration des actions

    case 'UPDATE_EVENTS_LIST':
    // console.log("erre",action.events)
      return { ...state, events: action.events };

    case 'ADD_EVENT':
      const newEvents = state.events;
      newEvents.push(action.event)
      return { ...state, events: newEvents };

    default:
      return state

  }
}

export default activeEvents;


