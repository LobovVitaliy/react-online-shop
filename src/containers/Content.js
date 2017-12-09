import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Products from './Products';
import Product from './Product';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Cart from './Cart';
import NotFound from '../components/NotFound';

class Content extends Component {
    render() {
        return (
            <div className='row content'>
                <Switch>
                    <Redirect exact from='/(products)?' to='/products/1' />
                    <Route exact path='/products/:page' component={Products} />
                    <Route exact path='/product/:id' component={Product} />
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