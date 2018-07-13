import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import App from './pages/App';
import {configureStore, history} from './store';

const initialState = {
	movie: {
		data: []
	}
}

const store = configureStore(initialState);

render(<Provider store={store}>
                  <ConnectedRouter history={history}>
                    <App />
                  </ConnectedRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
