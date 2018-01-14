import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

const url = '/api/v1/cart';

export const REQUEST_CART = 'REQUEST_CART';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const CREATE_CART_ITEM = 'CREATE_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

const request = () => ({ type: REQUEST_CART });

export const get = () => dispatch => {
    const success = data => ({ type: GET_CART_ITEMS, data });

    dispatch(request());
    axios.get(url)
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const add = item => dispatch => {
    const success = () => ({ type: CREATE_CART_ITEM, item });

    dispatch(request());
    axios.post(url, { id: item._id })
        .then(() => dispatch(success()))
        .then(() => dispatch(notify('Product added!')))
        .catch(err => dispatch(notify(geterror(err))));
};

export const remove = id => dispatch => {
    const success = () => ({ type: DELETE_CART_ITEM, id });

    dispatch(request());
    axios.delete(`${url}/${id}`)
        .then(() => dispatch(success()))
        .catch(err => dispatch(notify(geterror(err))));
};