import { fetchMovieData } from '../api/movie';
import { call, put, takeLatest } from 'redux-saga/effects';

export const REQUEST_MOVIE_DATA = "REQUEST_MOVIE_DATA";
export const RECEIVE_MOVIE_DATA = "RECEIVE_MOVIE_DATA";
export const RECEIVE_MOVIE_DATA_FAILED = "RECEIVE_MOVIE_DATA_FAILED";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export function requestMovieData() {
	return {
		type: REQUEST_MOVIE_DATA,
		payload: {}
	}
}

function recieveMovieData(movies) {
	return {
		type: RECEIVE_MOVIE_DATA,
		payload: movies
	}
}

function* getMovieData() {

	try {
		const data = yield call(fetchMovieData);
		const movies = data.map(movie => {
			movie.isFavorite = false
			return movie
		});

		yield put(recieveMovieData(movies));
	} catch (e) {
		yield put(receiveMovieDataFailed(e))
	}
}

export function* movieSaga() {
  yield takeLatest(REQUEST_MOVIE_DATA, getMovieData);
}

function receiveMovieDataFailed(error) {
	return {
		type: RECEIVE_MOVIE_DATA_FAILED,
		payload: error
	}
}

export const toggleFavorite = (imdbID) => {
	return {
		type: TOGGLE_FAVORITE,
		payload: imdbID
	}
}
