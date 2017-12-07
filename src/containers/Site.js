import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from '../components/Footer';
import NotificationBar from './NotificationBar';

class Site extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <hr className='line' />
                <Content />
                <hr className='line' />
                <Footer />
                <NotificationBar />
            </div>
        );
    }
}

export default Site;