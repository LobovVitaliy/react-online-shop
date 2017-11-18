import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Site extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <hr className='line' />
                    <Content />
                    <hr className='line' />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default Site;