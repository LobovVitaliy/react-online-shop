import { connect } from 'react-redux';

import { get, remove } from '../redux/actions/cart';
import Cart from '../components/Cart';

const mapStateToProps = state => ({ items: state.cart });

export default connect(mapStateToProps, { get, remove })(Cart);