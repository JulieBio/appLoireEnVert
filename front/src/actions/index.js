import axios from 'axios';
//import thunk from 'redux-thunk';

//Julie : description de l'action
export const updateEventsList = events => ({
  type: "UPDATE_EVENTS_LIST",
  events
});
export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const fetchEvents = () => {
  console.log(1);
  console.log("i'm in fetch event");
  return dispatch => {
    console.log(2);
    return axios.get("/event").then(response => {
      const activeEvents = response.data.events;
      console.log("response", response);
      dispatch(updateEventsList(activeEvents));
    });
  };
};


//Marion : Début stockage filtre test
export const addTest = test => ({
  type: "ADD_TEST",
  test
})

export const updateTest = test => ({
  type: "UPDATE_TEST",
  test
});

//fonction allant chercher la donnee
export const fetchTest = () => {
  console.log(1);
  console.log("i'm in fetch test");
  return dispatch => {
    console.log(2);
    const activeTest = "test";
      dispatch(updateTest(activeTest));
    };
  };
//Fin stockage filtre test

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
