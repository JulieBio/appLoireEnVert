import axios from 'axios';


export const updateEventsList = (event) => ({
    type: 'UPDATE_EVENTS_LIST',
    event
})

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
})

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