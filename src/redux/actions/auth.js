import axios from 'axios';
import cookie from 'react-cookies';
import { push } from 'react-router-redux';

import { geterror } from './helper';
import { notify } from './notification';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const signup = user => dispatch => {
    axios.post('/api/v1/auth/signup', user)
        .then(() => dispatch(push('/login')))
        .then(() => dispatch(notify('Registration successful!')))
        .catch(err => dispatch(notify(geterror(err))))
};

export const login = user => dispatch => {
    axios.post('/api/v1/auth/login', user)
        .then(() => dispatch({ type: LOGIN }))
        .then(() => dispatch(push('/cart')))
        .then(() => dispatch(notify('Login successful!')))
        .catch(err => dispatch(notify(geterror(err))));
};

export const logout = () => {
    cookie.remove('jwt', { path: '/' });
    return { type: LOGOUT };
};