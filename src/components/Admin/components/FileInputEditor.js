import React, { Component, Fragment } from 'react';

import FileInput from './FileInput';

class FileInputEditor extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onUpdate(this.fileInput.getFieldValue());
    }

    render() {
        const buttonStyle = { display: 'block', width: 119,  margin: '5px auto 0' };
        return (
            <Fragment>
                <FileInput
                    style={{ width: 120, margin: 'auto' }}
                    ref={input => this.fileInput = input}
                />
                <button style={buttonStyle} onClick={this.handleClick}>
                    save
                </button>
            </Fragment>
        );
    }
}

export default FileInputEditor;