import React, { Component } from 'react';

class FileInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ file: event.target.files[0] });
    }

    getFieldValue() {
        return this.state.file;
    }

    render() {
        return (
            <input style={this.props.style} type='file' onChange={this.handleChange} />
        );
    }
}

export default FileInput;