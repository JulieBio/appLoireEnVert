//Actions à tester pour EventFilterWhere

const filterEvents = (state = { where: null, who:null }, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      console.log("reducer",{ ...state, ...action.filter });
      return { ...state, ...action.filter };

    case "ADD_EVENT_FILTRED":
      const newEventsFiltred = state.eventsFiltred;
      newEventsFiltred.push(action.event);
      return { ...state, events: newEventsFiltred };

    default:
      return state;
  }
};

export default filterEvents;