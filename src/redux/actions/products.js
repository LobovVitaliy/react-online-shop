import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export default () => dispatch => {
    axios.get('/api/v1/products')
        .then(res => dispatch({ type: GET_PRODUCTS, data: res.data }))
        .catch(err => dispatch(notify(geterror(err))));
};