import React, { Component } from 'react';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <div className='row header'>
                <div className='col-lg-10 logo'>
                    <a href='#'>Shop</a>
                </div>
                <div className='col-lg-10 sign-up'>
                    <a href='#'>Sign Up</a>
                </div>
            </div>
        );
    }
}

export default Header;