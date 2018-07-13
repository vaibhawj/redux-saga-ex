import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { movieSaga } from '../actions/movie';

export const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(routeMiddleware, sagaMiddleware)
		)
	);

	sagaMiddleware.run(movieSaga);

	return store
}
