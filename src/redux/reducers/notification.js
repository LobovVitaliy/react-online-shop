import { SET_NOTIFICATION, RESET_NOTIFICATION } from '../actions/notification';

export default function(state = '', action) {
    switch (action.type) {

        case SET_NOTIFICATION:
            return action.message;

        case RESET_NOTIFICATION:
            return '';

        default:
            return state;
    }
};