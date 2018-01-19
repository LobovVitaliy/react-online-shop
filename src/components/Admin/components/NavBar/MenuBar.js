import React, { Component } from 'react';

import { AppBar, FlatButton, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class MenuBar extends Component {
    renderLeftIcon() {
        return (
            this.props.open ? <IconButton><NavigationClose /></IconButton> : null
        );
    }

    render() {
        return (
            <AppBar
                style={{ position: 'fixed', top: 0 }}
                title='Admin'
                iconElementLeft={this.renderLeftIcon()}
                onLeftIconButtonTouchTap={this.props.onShowMenu}
            />
        );
    }
}

export default MenuBar;