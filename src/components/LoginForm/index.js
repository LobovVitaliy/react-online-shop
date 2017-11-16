import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Form from '../Form';
import Field from '../Field';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: {
                value: '',
                regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: 'This field is required'
            },
            password: {
                value: '',
                regex: /^\S{4,}$/,
                error: 'This field is required'
            }
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        const { mail, password } = this.state;

        if (!mail.error && !password.error) {
            this.props.login(mail.value, password.value);
        }
    }

    getError(value, regex) {
        if (!value) {
            return 'This field is required';
        } else if (!value.match(regex)) {
            return 'This field is not valid';
        } else {
            return '';
        }
    }

    handleChange(field, value) {
        const regex = this.state[field].regex;
        const error = this.getError(value, regex);
        this.setState({ [field]: { value, regex, error } });
    }

    render() {
        const { mail, password } = this.state;
        return (
            <Form header='Login' button='Log in' onSubmit={this.handleLogin}>
                <Field
                    label='Email'
                    type='text'
                    error={mail.error}
                    onChange={this.handleChange.bind(this, 'mail')}
                />
                <Field
                    label='Password'
                    type='password'
                    error={password.error}
                    onChange={this.handleChange.bind(this, 'password')}
                />
            </Form>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginForm;