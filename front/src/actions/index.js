import axios from 'axios';

//Julie : description de l'action
export const updateEventsList = (event) => ({
    type: 'UPDATE_EVENTS_LIST',
    event
})

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
})

//Anaële : axios qui appelle les évenements en BDD. => (/Event) correspond à l'adresse http://localhost:5000 modifiée dans package json du dossier front ajout ligne proxy
export const fetchEvents = () => {
    return dispatch => {
        dispatch ()
        return axios.get('/event')
            .then(result => {
                console.log(result.data)
            })
    }
}

//voir pour le filtre :
// {
//     type : SET_VISIBILITY_FILTER , 
//     filtre : SHOW_COMPLETED 
//   }

// export const addTodoEvents = (event) => {
//     return (dispatch, getState) =>
//     dispatch addEvents(event);

// };