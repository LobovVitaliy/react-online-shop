import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import Field from './Field';

class SignUpForm extends Component {
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
            },
            confirmPassword: {
                value: '',
                regex: /^\S{4,}$/,
                error: 'This field is required'
            }
        };

        this.handleSignUp = this.handleSignUp.bind(this);

        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    }

    handleSignUp() {
        const { mail, password, confirmPassword } = this.state;

        if (!mail.error && !password.error && !confirmPassword.error) {
            this.props.signup({
                mail: mail.value,
                password: password.value
            });
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

    handleChangeMail(value) {
        const regex = this.state.mail.regex;
        const error = this.getError(value, regex);
        this.setState({ mail: { value, regex, error } });
    }

    getNewConfirmPasswordState(password) {
        const { value, regex } = this.state.confirmPassword;
        const error = this.getError(value, regex);

        if (!error) {
            return {
                confirmPassword: {
                    value,
                    regex,
                    error: (value !== password) ? 'Your passwords do not match' : ''
                }
            }
        }
        return {};
    }

    handleChangePassword(value) {
        const { password: { regex }, confirmPassword } = this.state;
        const error = this.getError(value, regex);

        const newState = this.getNewConfirmPasswordState(value);
        newState.password = { value, regex, error };
        this.setState(newState);
    }

    handleChangeConfirmPassword(value) {
        const { confirmPassword: { regex }, password } = this.state;
        let error = this.getError(value, regex);

        if (!error && value !== password.value) {
            error = 'Your passwords do not match';
        }
        this.setState({ confirmPassword: { value, regex, error } });
    }

    render() {
        const { mail, password, confirmPassword } = this.state;
        return (
            <Form header='Register' button='Sign up' onSubmit={this.handleSignUp}>
                <Field
                    label='Email'
                    type='text'
                    error={mail.error}
                    onChange={this.handleChangeMail}
                />
                <Field
                    label='Password'
                    type='password'
                    error={password.error}
                    onChange={this.handleChangePassword}
                />
                <Field
                    label='Confirm Password'
                    type='password'
                    error={confirmPassword.error}
                    onChange={this.handleChangeConfirmPassword}
                />
            </Form>
        );
    }
}

SignUpForm.propTypes = {
    signup: PropTypes.func.isRequired
};

export default SignUpForm;