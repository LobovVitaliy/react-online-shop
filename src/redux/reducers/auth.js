import cookie from 'react-cookies';
import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = !!cookie.load('jwt');

export default function(state = initialState, action) {
    switch (action.type) {

        case LOGIN:
            return true;

        case LOGOUT:
            return false;

        default:
            return state;
    }
}