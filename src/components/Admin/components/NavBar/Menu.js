import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Drawer, MenuItem, Divider } from 'material-ui';

class Menu extends Component {
    renderMenuItem(item, i) {
        return (
            <Fragment key={i}>
                <MenuItem
                    primaryText={item.text}
                    containerElement={<Link to={item.path} />}
                />
                <Divider />
            </Fragment>
        );
    }

    render() {
        return (
            <Drawer
                containerStyle={{ position: 'fixed', top: 64 }}
                open={this.props.open}
                width={200}
            >
                {this.props.items.map(this.renderMenuItem, this)}
            </Drawer>
        );
    }
}

export default Menu;