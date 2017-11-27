import { connect } from 'react-redux';

import { reset } from '../redux/actions/notification';
import NotificationBar from '../components/NotificationBar';

const mapStateToProps = state => ({ message: state.notification });

export default connect(mapStateToProps, { reset })(NotificationBar);