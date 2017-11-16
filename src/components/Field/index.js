import React, { Component } from 'react';
import './index.scss';

import PropTypes from 'prop-types';

class Field extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        const { label, type, error } = this.props;
        return (
            <div className='field'>
                <label>{label}</label>
                <input type={type} onChange={this.handleChange} />
                <div className={error ? 'error is-error' : 'error'}>{error}</div>
            </div>
        );
    }
}

Field.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Field;