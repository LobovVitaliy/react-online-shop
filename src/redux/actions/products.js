import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const success = data => {
    return {
        type: GET_PRODUCTS,
        count: data.count,
        data: data.products
    };
};

export default (page, limit) => dispatch => {
    axios.get('/api/v1/products', { params: { page, limit } })
        .then(res => dispatch(success(res.data)))
        .catch(err => dispatch(notify(geterror(err))));
};