import { connect } from 'react-redux';

import { get, remove } from '../redux/actions/cart';
import Cart from '../components/Cart';

const mapStateToProps = state => ({
    isFetching: state.cart.isFetching,
    items: state.cart.data
});

export default connect(mapStateToProps, { get, remove })(Cart);