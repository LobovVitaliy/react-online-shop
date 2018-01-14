import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
        )}
    />
);

const mapStateToProps = state => ({ isLoggedIn: state.auth });

export default withRouter(connect(mapStateToProps)(AuthRoute));