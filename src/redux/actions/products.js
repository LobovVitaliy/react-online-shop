import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

const url = '/api/v1/products';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';

const request = () => ({ type: REQUEST_PRODUCTS });

export const getById = id => dispatch => {
    const success = item => ({ type: GET_PRODUCT_BY_ID, item });

    dispatch(request());
    axios.get(`${url}/${id}`)
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const get = params => dispatch => {
    const success = data => ({
        type: GET_PRODUCTS,
        count: data.count,
        data: data.products
    });

    dispatch(request());
    axios.get(url, { params })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

const objectToFormData = object => {
    const data = new FormData();
    for (let key in object) {
        data.append(key, object[key]);
    }
    return data;
};

const headers = {
    'Content-Type': 'multipart/form-data'
};

export const create = product => dispatch => {
    const success = item => ({ type: CREATE_PRODUCT, item });
    const data = objectToFormData(product);

    dispatch(request());
    axios.post(url, data, { headers })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const update = (id, payload) => dispatch => {
    const success = item => ({ type: UPDATE_PRODUCT, item });
    const data = objectToFormData(payload);

    dispatch(request());
    axios.put(`${url}/${id}`, data, { headers })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const remove = ids => dispatch => {
    const success = () => ({ type: DELETE_PRODUCTS, ids });

    dispatch(request());
    axios.delete(url, { data: ids })
        .then(() => dispatch(success()))
        .catch(err => dispatch(notify(geterror(err))));
};