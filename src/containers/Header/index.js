import React, { Component } from 'react';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <a className='logo' href='#'>Shop</a>
                <a className='sign-up' href='#'>Sign Up</a>
            </header>
        );
    }
}

export default Header;