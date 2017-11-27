import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Card from '../Card';

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                {this.props.products.map((card, i) => (
                    <div className='card-col' key={i}>
                        <Card card={card} />
                    </div>
                ))}
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired
};

export default Products;