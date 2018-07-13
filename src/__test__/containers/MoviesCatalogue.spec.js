import {mapStateToProps, mapDispatchToProps} from '../../containers/MoviesCatalogue';

describe('MoviesCatalogue Container', ()=> {
  it('should map state to props', ()=> {
    const state = {
      movie: {
        loading: false,
        data: [{}, {isFavorite: true}],
        error: {}
      }
    }
    const props = mapStateToProps(state);
    expect(props.loading).toBeFalsy();
    expect(props.movies).toBe(state.movie.data);
    expect(props.favoriteCount).toBe(1);
    expect(props.error).toBe(state.movie.error);
  });

  it('should map dispatch to props', ()=> {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.handleToggleFavorite(123);
    expect(dispatch).toBeCalledWith({
      type: 'TOGGLE_FAVORITE',
      payload: 123
    });

    props.requestMovieData();
    expect(dispatch).toBeCalledWith({
      type: 'REQUEST_MOVIE_DATA',
      payload: {}
    });
  })
})