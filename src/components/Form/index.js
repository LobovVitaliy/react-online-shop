import React, { Component } from 'react';
import './index.scss';

import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    render() {
        const { header, children, button } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{header}</h2>
                {children}
                <button type='submit'>{button}</button>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form;