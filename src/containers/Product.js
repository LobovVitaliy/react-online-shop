import { connect } from 'react-redux';

import { getById } from '../redux/actions/products';
import { add } from '../redux/actions/cart';
import Product from '../components/Product';

const mapStateToProps = state => ({
    isLoggedIn: state.auth,
    isFetching: state.products.isFetching,
    product: state.products.selected
});

export default connect(mapStateToProps, { getById, add })(Product);