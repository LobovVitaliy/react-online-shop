import React, { Component } from 'react';
import './index.scss';

import PropTypes from 'prop-types';

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
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignUp(event) {
        event.preventDefault();
        const { mail, password, confirmPassword } = this.state;

        if (password.value !== confirmPassword.value) {
            this.setState({ confirmPassword:
                Object.assign({}, confirmPassword, { error: 'Your passwords do not match' })
            });
        } else if (!mail.error && !password.error && !confirmPassword.error) {
            this.props.handleSignUp(mail.value, password.value);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const regex = this.state[name].regex;
        let error = '';

        if (!value) {
            error = 'This field is required';
        } else if (!value.match(regex)) {
            error = 'This field is not valid';
        }
        this.setState({ [name]: { value, regex, error } });
    }

    renderField(name, label, type) {
        const error = this.state[name].error;
        return (
            <div className='field'>
                <label>{label}</label>
                <input name={name} type={type} onChange={this.handleChange} />
                <div className={error ? 'error is-error' : 'error'}>{error}</div>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <h2>Sign Up</h2>
                {this.renderField('mail', 'Email', 'text')}
                {this.renderField('password', 'Password', 'password')}
                {this.renderField('confirmPassword', 'Confirm Password', 'password')}
                <button type='submit'>Sign up</button>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    handleSignUp: PropTypes.func.isRequired
};

export default SignUpForm;