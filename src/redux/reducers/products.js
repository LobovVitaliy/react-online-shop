import { GET_PRODUCTS } from '../actions/products';

export default function(state = [], action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return action.data;

        default:
            return state;
    }
};