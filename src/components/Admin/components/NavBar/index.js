import React, { Component, Fragment } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MenuBar from './MenuBar';
import Menu from './Menu';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };

        this.handleShowMenu = this.handleShowMenu.bind(this);
    }

    handleShowMenu() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const open = this.state.open;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <MenuBar open={open} onShowMenu={this.handleShowMenu} />
                    <Menu open={open} items={this.props.items} />
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default NavBar;