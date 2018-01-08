import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

const request = () => ({ type: REQUEST_PRODUCTS });

const success = data => ({
    type: GET_PRODUCTS,
    count: data.count,
    data: data.products
});

export default (page, limit) => dispatch => {
    dispatch(request());
    axios.get('/api/v1/products', { params: { page, limit } })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};