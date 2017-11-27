import { connect } from 'react-redux';

import getProducts from '../redux/actions/products';
import Products from '../components/Products';

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps, { getProducts })(Products);