import {
    REQUEST_CART,
    GET_CART_ITEMS,
    CREATE_CART_ITEM,
    DELETE_CART_ITEM
} from '../actions/cart';

const initialState = {
    isFetching: false,
    data: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case REQUEST_CART:
            return {
                isFetching: true,
                data: state.data
            };

        case GET_CART_ITEMS:
            return {
                isFetching: false,
                data: action.data
            };

        case CREATE_CART_ITEM:
            return {
                isFetching: false,
                data: state.data.concat(action.item)
            };

        case DELETE_CART_ITEM:
            return {
                isFetching: false,
                data: state.data.filter(item => item._id !== action.id)
            };

        default:
            return state;
    }
};