import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const CHANGE_CART_ITEMS = 'CHANGE_CART_ITEMS';

const success = items => ({ type: CHANGE_CART_ITEMS, items });

export const get = () => dispatch => {
    axios.get('/api/v1/cart')
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const add = id => dispatch => {
    axios.post('/api/v1/cart', { id })
        .then(res => dispatch(success(res.data)))
        .then(() => dispatch(notify('Product added!')))
        .catch(err => dispatch(notify(geterror(err))));
};

export const remove = id => dispatch => {
    axios.delete(`/api/v1/cart/${id}`)
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};