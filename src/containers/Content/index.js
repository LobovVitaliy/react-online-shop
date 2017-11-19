import React, { Component } from 'react';
import './index.scss';

import { Switch, Redirect, Route } from 'react-router-dom';

import Products from '../Products';
import Product from '../../components/Product';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import Cart from '../Cart';
import NotFound from '../NotFound';

class Content extends Component {
    render() {
        return (
            <div className='row content'>
                <Switch>
                    <Redirect exact from='/' to='/products' />
                    <Route exact path='/products' component={Products} />
                    <Route path='/products/:id' component={Product} />
                    <Route exact path='/login' component={LoginForm} />
                    <Route exact path='/signup' component={SignUpForm} />
                    <Route exact path='/cart' component={Cart} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Content;