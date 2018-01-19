import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';

class Page extends Component {
    render() {
        const style = { position: 'relative', top: 64, margin: 2 };
        const { routes, children } = this.props;
        return (
            <Fragment>
                <NavBar items={routes} />
                <div style={style}>{children}</div>
            </Fragment>
        );
    }
}

Page.propTypes = {
    routes: PropTypes.array.isRequired
};

export default Page;