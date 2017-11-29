import { CHANGE_CART_ITEMS } from '../actions/cart';

export default function(state = [], action) {
    switch (action.type) {

        case CHANGE_CART_ITEMS:
            return action.items;

        default:
            return state;
    }
};