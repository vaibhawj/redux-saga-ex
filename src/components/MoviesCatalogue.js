import React from 'react'
import MovieCard from './MovieCard'

class MoviesCatalogue extends React.Component {

  componentDidMount() {
    this.props.requestMovieData();
  }

  renderError(){
    return <h6 className="col-sm-3">Error loading movies</h6>;
  }

  renderLoading(){
    return <h6 className="col-sm-3">Loading...</h6>;
  }

  render() {
    return (
      <div>
        <div className="clearfix">
          <a href="#"><div className="float-left" onClick={()=> this.props.requestMovieData()}><h2>Movies</h2><span class="glyphicon glyphicon-envelope"/></div></a>
          <div className="float-right"><i>Favorites({this.props.favoriteCount})</i></div>
        </div>
        <div style={{ paddingTop: "1rem" }} className="row">
          {
            this.props.loading ? this.renderLoading()
              : this.props.error ? this.renderError()
                : this.props.movies.map(movie => <MovieCard movie={movie} toggleFavorite={this.props.handleToggleFavorite}/>)      
          }
        </div>
      </div>
    )
  }
}

export default MoviesCatalogue