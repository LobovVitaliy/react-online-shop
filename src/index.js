import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './index.scss';

import createStoreWithHistory from './redux/store';
import Site from './containers/Site';

const history = createHistory();
const store = createStoreWithHistory(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Site />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);