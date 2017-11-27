import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import NotFound from '../NotFound';

class Product extends Component {
    componentDidMount() {
        this.props.getProductById(this.props.match.params.id);
    }

    render() {
        const product = this.props.product;

        if (!product._id) return <NotFound />;
        return (
            <div className='product'>
                <div className='product-img-btns'>
                    <img src={`/static/images/${product._id}`} />
                    <div className='buttons'>
                        <button>Add to cart</button>
                        <button>Buy</button>
                    </div>
                </div>
                <div className='product-info'>
                    <div className='product-title'>
                        <h2>{product.title}</h2>
                    </div>
                    <div className='product-price'>
                        <h2 className='price'>{product.price}</h2>
                    </div>
                    <div className='product-description'>
                        <hr />
                        <p>{product.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    getProductById: PropTypes.func.isRequired
};

export default Product;