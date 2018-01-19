import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './admin.scss';

import createStoreWithHistory from './redux/store';
import Admin from './containers/Admin';

const history = createHistory();
const store = createStoreWithHistory(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Admin />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);