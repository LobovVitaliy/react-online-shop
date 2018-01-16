import { connect } from 'react-redux';

import { get } from '../redux/actions/products';
import Products from '../components/Products';

const mapStateToProps = state => ({
    isFetching: state.products.isFetching,
    products: state.products.data,
    count: state.products.count
});

export default connect(mapStateToProps, { get })(Products);