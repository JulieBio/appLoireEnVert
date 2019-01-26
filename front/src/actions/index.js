import axios from "axios";

//Julie : description de l'action
export const updateMoviesList = movies => ({
  type: "UPDATE_MOVIES_LIST",
  movies
});
export const addMovie = movie => ({
  type: "ADD_MOVIE",
  movie
});


export const fetchMovies = filter => {
  console.log("filter", filter);
  return dispatch => {
    console.log(2);
    return axios
      .post("/movie", filter)
      .then(response => {
        const activeMovies = response.data;
        console.log("response", response.data);
        dispatch(updateMoviesList(activeMovies));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

