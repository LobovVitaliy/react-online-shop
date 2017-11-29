import { GET_PRODUCTS } from '../actions/products';

const initialState = {
    count: 0,
    data: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                count: action.count,
                data: action.data
            };

        default:
            return state;
    }
};