import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const signup = user => dispatch => {
    axios.post('/api/v1/auth/signup', user)
        .then(() => dispatch(notify('Registration successful!')))
        .catch(err => dispatch(notify(geterror(err))))
};

export const login = user => dispatch => {
    axios.post('/api/v1/auth/login', user)
        .then(res => localStorage.setItem('jwt', res.data.token))
        .then(() => dispatch({ type: LOGIN }))
        .then(() => dispatch(notify('Login successful!')))
        .catch(err => dispatch(notify(geterror(err))));
};

export const logout = () => {
    localStorage.removeItem('jwt');
    return { type: LOGOUT };
};