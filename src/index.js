import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Provider } from 'react-redux';
import store from './redux/store';

import Site from './containers/Site';

ReactDOM.render(
    <Provider store={store}>
        <Site />
    </Provider>,
    document.getElementById('root')
);