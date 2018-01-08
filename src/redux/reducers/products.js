import { REQUEST_PRODUCTS, GET_PRODUCTS } from '../actions/products';

const initialState = {
    isFetching: false,
    count: 0,
    data: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case REQUEST_PRODUCTS:
            return {
                ...state,
                isFetching: true
            };

        case GET_PRODUCTS:
            return {
                isFetching: false,
                count: action.count,
                data: action.data
            };

        default:
            return state;
    }
};