import {  GET_PRODUCT_BY_ID } from '../actions/product';

export default function(state = {}, action) {
    switch (action.type) {

        case GET_PRODUCT_BY_ID:
            return action.data;

        default:
            return state;
    }
};