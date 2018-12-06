import axios from 'axios';
//import thunk from 'redux-thunk';

//Julie : description de l'action
export const updateEventsList = events => ({
  type: "UPDATE_EVENTS_LIST",
  events
});
export const updateFilterListWho = events => ({
  type: "UPDATE_FILTER_LIST_WHO",
  events
});
export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});
export const fetchEvents = () => {
  // console.log(1);
  // console.log("i'm in fetch event");
  return dispatch => {
    console.log(2);
    return axios.get("/event").then(response => {
      const activeEvents = response.data.events;
      console.log("response", response);
      dispatch(updateEventsList(activeEvents));
    });
  };
};
export const fetchFilterWho = () => {
  // console.log(1);
  // console.log("i'm in fetch event");
  return dispatch => {
    console.log(2);
    return axios.get("/event/place").then(response => {
      const activeFilters = response.data.events;
      console.log("response", response);
      dispatch(updateFilterListWho(activeFilters));
    });
  };
};


//Anaële : axios qui appelle les évenements en BDD. => (/Event) correspond à l'adresse http://localhost:5000 modifiée dans package json du dossier front ajout ligne proxy

//voir pour le filtre :
// {
//     type : SET_VISIBILITY_FILTER ,
//     filtre : SHOW_COMPLETED
//   }

// export const addTodoEvents = (event) => {
//     return (dispatch, getState) =>
//     dispatch addEvents(event);

// };
