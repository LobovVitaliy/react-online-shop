import React, { Component } from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Link className='logo' to='/'>Shop</Link>
                <div className='menu'>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </header>
        );
    }
}

export default Header;