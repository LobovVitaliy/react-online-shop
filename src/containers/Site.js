import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Site extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <hr className='line' />
                <Content />
                <hr className='line' />
                <Footer />
            </div>
        );
    }
}

export default Site;