import React from 'react'

class MovieCard extends React.Component {

  render() {
    const movie = this.props.movie;
    return (
      <div className="col-sm-3">
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-title">{movie.Title}</h6>
            {movie.Year}
            <br />
            <h6>{movie.Type}</h6>
            <button onClick={() => this.props.toggleFavorite(movie.imdbID)} className="btn btn-primary"
            >{movie.isFavorite ? "Remove from favorites" : "Add to favorites"}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;