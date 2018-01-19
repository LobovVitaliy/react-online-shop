import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClean = this.handleClean.bind(this);
    }

    search(value) {
        this.props.search(value);
    }

    handleSearch() {
        this.search(this.searchInput.value);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.search(event.target.value);
        }
    }

    setInputValue(value) {
        this.searchInput.value = value;
    }

    handleClean() {
        this.setInputValue('');
        this.search('');
    }

    render() {
        return (
            <div className='input-group'>
                <input
                    className='form-control'
                    ref={input => this.searchInput = input}
                    placeholder={this.props.placeholder}
                    onKeyPress={this.handleKeyPress}
                />
                <span className='input-group-btn'>
                    <button className='btn btn-default' onClick={this.handleSearch}>
                        Search
                    </button>
                    <button className='btn btn-default' onClick={this.handleClean}>
                        Clean
                    </button>
                </span>
            </div>
        );
    }
}

export default SearchPanel;