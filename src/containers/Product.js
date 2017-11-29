import { connect } from 'react-redux';

import getProductById from '../redux/actions/product';
import { add } from '../redux/actions/cart';
import Product from '../components/Product';

const mapStateToProps = state => ({ product: state.product });

export default connect(mapStateToProps, { getProductById, add })(Product);