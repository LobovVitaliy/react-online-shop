import { connect } from 'react-redux';

import { login } from '../redux/actions/auth';
import LoginForm from '../components/LoginForm';

export default connect(null, { login })(LoginForm);