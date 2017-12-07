import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notification from './notification';
import auth from './auth';
import products from './products';
import product from './product';
import cart from './cart';

export default combineReducers({
    routing: routerReducer,
    notification,
    auth,
    products,
    product,
    cart
});