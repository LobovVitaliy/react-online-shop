import {
    REQUEST_USERS,
    GET_USERS,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USERS
} from '../actions/users';

const initialState = {
    isFetching: false,
    count: 0,
    data: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case REQUEST_USERS:
            return {
                ...state,
                isFetching: true
            };

        case GET_USERS:
            return {
                isFetching: false,
                count: action.count,
                data: action.data
            };

        case CREATE_USER:
            return {
                isFetching: false,
                count: state.count + 1,
                data: state.data.concat(action.item)
            };

        case UPDATE_USER:
            const updated = action.item;
            return {
                isFetching: false,
                count: state.count,
                data: state.data.map(item => item._id !== updated._id ? item : updated)
            };

        case DELETE_USERS:
            const ids = action.ids;
            return {
                isFetching: false,
                count: state.count - ids.length,
                data: state.data.filter(item => !ids.includes(item._id))
            };

        default:
            return state;
    }
};