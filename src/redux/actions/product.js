import axios from 'axios';

import { geterror } from './helper';
import { notify } from './notification';

export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export default id => dispatch => {
    axios.get(`/api/v1/products/${id}`)
        .then(res => dispatch({ type: GET_PRODUCT_BY_ID, data: res.data }))
        .catch(err => dispatch(notify(geterror(err))));
};