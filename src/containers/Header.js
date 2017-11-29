import { connect } from 'react-redux';

import { logout } from '../redux/actions/auth';
import Header from '../components/Header';

const mapStateToProps = state => ({ isLoggedIn: state.auth });

export default connect(mapStateToProps, { logout })(Header);