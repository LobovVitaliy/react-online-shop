import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import Content from './Content';
import Footer from '../components/Footer';
import NotificationBar from './NotificationBar';

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
                    <NotificationBar />
                </div>
            </BrowserRouter>
        );
    }
}

export default Site;