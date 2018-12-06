const activeTest = (state = { test: [] }, action) => {
  switch (action.type) {

// Julie : déclaration des actions
//Marion : déclaration des actions test

    case 'UPDATE_TEST':
    console.log( action.test)
      return { ...state, test: action.test };

    case 'ADD_TEST':
      const newTest= state.test;
      newTest.push(action.test)
      return { ...state, test: newTest };

    default:
      return state
  }
}

export default activeTest;


// case 'UPDATE_EVENTS_LIST':
// const updateEventsList = action.updateEventsList;
// return { ...state, updateEventsList: event }
