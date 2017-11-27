import { connect } from 'react-redux';

import { signup } from '../redux/actions/auth';
import SignUpForm from '../components/SignUpForm';

export default connect(null, { signup })(SignUpForm);