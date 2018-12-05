const activeEvents = (state = { events: [] }, action) => {
  switch (action.type) {

// Julie : déclaration des actions

    case 'UPDATE_EVENTS_LIST':
    console.log( action.events)
      return { ...state, events: action.events };

    case 'ADD_TEST':
      const newTest= state.test;
      newTest.push(action.test)
      return { ...state, test: newTest };

    default:
      return state

  }
}

export default activeEvents;


// case 'UPDATE_EVENTS_LIST':
// const updateEventsList = action.updateEventsList;
// return { ...state, updateEventsList: event }
