import {connect} from "react-redux";
import {requestMovieData, toggleFavorite} from '../actions/movie';
import MoviesCatalogue from '../components/MoviesCatalogue';


export const mapStateToProps = (state) => {
	return {
		movies: state.movie.data,
		loading: state.movie.loading,
		error: state.movie.error,
		favoriteCount: state.movie.data.filter(movie => movie.isFavorite).length
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		requestMovieData: () => dispatch(requestMovieData()),
		handleToggleFavorite: (imdbId) => dispatch(toggleFavorite(imdbId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCatalogue)
