import axios from "axios";

//Julie : description de l'action
export const updateEventsList = events => ({
  type: "UPDATE_EVENTS_LIST",
  events
});
export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

//On crée const pour actualiser les résultats filtrés (Monica/Nadim)
export const updateFilter = filter => ({
  type: "UPDATE_FILTER",
  filter
});


export const fetchEvents = filter => {
  console.log("filter", filter);
  return dispatch => {
    console.log(2);
    return axios
      .post("/event", filter)
      .then(response => {
        const activeEvents = response.data;
        console.log("response", response.data);
        dispatch(updateEventsList(activeEvents));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

<<<<<<< HEAD
=======

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
>>>>>>> 97cbd986e86d9bd8bf3160e4ec30469e969b52b1
