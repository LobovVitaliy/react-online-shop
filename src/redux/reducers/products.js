import {
    REQUEST_PRODUCTS,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCTS
} from '../actions/products';

const initialState = {
    isFetching: false,
    count: 0,
    data: [],
    selected: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case REQUEST_PRODUCTS:
            return {
                ...state,
                isFetching: true
            };

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                isFetching: false,
                selected: action.item
            };

        case GET_PRODUCTS:
            return {
                isFetching: false,
                count: action.count,
                data: action.data,
                selected: state.selected
            };

        case CREATE_PRODUCT:
            return {
                isFetching: false,
                count: state.count + 1,
                data: state.data.concat(action.item),
                selected: state.selected
            };

        case UPDATE_PRODUCT:
            const updated = action.item;
            return {
                isFetching: false,
                count: state.count,
                data: state.data.map(item => item._id !== updated._id ? item : updated),
                selected: state.selected
            };

        case DELETE_PRODUCTS:
            const ids = action.ids;
            return {
                isFetching: false,
                count: state.count - ids.length,
                data: state.data.filter(item => !ids.includes(item._id)),
                selected: state.selected
            };

        default:
            return state;
    }
};