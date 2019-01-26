const activeMovies = (state = { movies: [] }, action) => {
  switch (action.type) {

// Julie : déclaration des actions

    case 'UPDATE_MOVIES_LIST':
    console.log("erre",action.movies)
      return { ...state, movies: action.movies };

    case 'ADD_MOVIE':
      const newMovies = state.movies;
      newMovies.push(action.movie)
      return { ...state, movies: newMovies };

    default:
      return state

  }
}

export default activeMovies;


