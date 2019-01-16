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
// Julie Lisa : filter (sous type) est un req.body
export const updateFilter = filter => ({
  type: "UPDATE_FILTER",
  filter
});

// recupération dans la bdd
export const fetchEvents = filter => {
  console.log("filter", filter);
  return dispatch => {
    console.log(2);
    return (
      axios
        // Julie Lisa : filter est un req.body est le même que filter dans updateFilter
        .post("http://vps635285.ovh.net:5000/event", filter)
        .then(response => {
          const activeEvents = response.data;
          console.log("response", response.data);
          dispatch(updateEventsList(activeEvents));
        })
        .catch(e => {
          console.log(e);
        })
    );
  };
};
