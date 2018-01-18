import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

const url = '/api/v1/users';

export const REQUEST_USERS = 'REQUEST_USERS';
export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USERS = 'DELETE_USERS';

const request = () => ({ type: REQUEST_USERS });

export const get = params => dispatch => {
    const success = data => ({
        type: GET_USERS,
        count: data.count,
        data: data.users
    });

    dispatch(request());
    axios.get(url, { params })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const create = user => dispatch => {
    const success = item => ({ type: CREATE_USER, item });

    dispatch(request());
    axios.post(url, user)
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const update = (id, payload) => dispatch => {
    const success = item => ({ type: UPDATE_USER, item });

    dispatch(request());
    axios.put(`${url}/${id}`, payload)
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};

export const remove = ids => dispatch => {
    const success = () => ({ type: DELETE_USERS, ids });

    dispatch(request());
    axios.delete(url, { data: ids })
        .then(() => dispatch(success()))
        .catch(err => dispatch(notify(geterror(err))));
};