import { combineReducers } from 'redux';

import notification from './notification';
import auth from './auth';
import products from './products';
import product from './product';

export default combineReducers({
    notification,
    auth,
    products,
    product
});