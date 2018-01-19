import { connect } from 'react-redux';

import fields from '../tables/product';

import { get, create, update, remove } from '../../../redux/actions/products';
import Table from '../../../components/Admin/Table';

const mapStateToProps = state => ({ ...state.products, fields });

export default connect(mapStateToProps, { get, create, update, remove })(Table);