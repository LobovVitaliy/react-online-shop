import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class NotificationBar extends Component {
    constructor(props) {
        super(props);

        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleRequestClose() {
        this.props.reset();
    }

    render() {
        const message = this.props.message;
        return (
            <MuiThemeProvider>
                <Snackbar
                    open={!!message}
                    message={message}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </MuiThemeProvider>
        );
    }
}

NotificationBar.propTypes = {
    message: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired
};

export default NotificationBar;