import { connect } from 'react-redux';

import fields from '../tables/user';

import { get, create, update, remove } from '../../../redux/actions/users';
import Table from '../../../components/Admin/Table';

const mapStateToProps = state => ({ ...state.users, fields });

export default connect(mapStateToProps, { get, create, update, remove })(Table);