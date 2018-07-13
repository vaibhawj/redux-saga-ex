import {REQUEST_MOVIE_DATA, RECEIVE_MOVIE_DATA, RECEIVE_MOVIE_DATA_FAILED, TOGGLE_FAVORITE } from '../actions/movie';

export default (state={data: []}, action) => {

  switch(action.type) {

    case REQUEST_MOVIE_DATA: return {
      ...state,
      loading: true
    }

    case RECEIVE_MOVIE_DATA: return {
      ...state,
      loading: false,
      data: action.payload
    }

    case RECEIVE_MOVIE_DATA_FAILED: return {
      ...state,
      loading: false,
      error: action.payload
    }

    case TOGGLE_FAVORITE: return {
      ...state,
      data: state.data.map(movie => {
        if(movie.imdbID === action.payload) {
          movie.isFavorite = !movie.isFavorite;
        }
        return movie;
      })
    }
    
  }
  return state;
}