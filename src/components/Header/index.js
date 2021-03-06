import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import { Link } from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        const { isLoggedIn, getCart } = this.props;
        if (isLoggedIn) getCart();
    }

    render() {
        const { isLoggedIn, count } = this.props;
        return (
            <header>
                <Link className='logo' to='/'>Shop</Link>
                {!isLoggedIn ? (
                    <div className='menu'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                ) : (
                    <div className='menu'>
                        <Link to='/cart'>Cart({count})</Link>
                        <Link to='/' onClick={this.props.logout}>Logout</Link>
                    </div>
                )}
            </header>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    logout: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired
};

export default Header;