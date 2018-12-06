const filterEvents = (state = { eventsFiltred: [] }, action) => {
  switch (action.type) {
    case "UPDATE_FILTER_LIST_WHO":
      console.log(action.eventsFiltred);
      return { ...state, events: action.eventsFiltred };

    case "ADD_EVENT_FILTRED":
      const newEventsFiltred = state.eventsFiltred;
      newEventsFiltred.push(action.event);
      return { ...state, events: newEventsFiltred };

    default:
      return state;
  }
};

export default filterEvents;