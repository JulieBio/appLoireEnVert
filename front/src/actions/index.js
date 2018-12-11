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

// Cette const je ne sais pas si elle marche, on n'a pas la BDD (Monica/Nadim)
export const addEventFiltred = event => ({
  type: "ADD_EVENT",
  event
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

//Je ne sais pas si elle marche tjs. Pas accès à la BDD de Marion. A virer peut être par Monica et Nadim
// export const fetchFilterWho = () => {
//   // console.log(1);
//   // console.log("i'm in fetch event");
//   return dispatch => {
//     console.log(2);
//     return axios.get("/event?where=stephanois-pilat").then(response => {
//       const activeFilters = response.data;
//       console.log("response", response);
//       dispatch(updateFilter(activeFilters));
//     });
//   };
// };

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
