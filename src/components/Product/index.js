import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Product extends Component {
    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.buy = this.buy.bind(this);
    }

    componentDidMount() {
        this.props.getById(this.props.match.params.id);
    }

    shouldComponentUpdate() {
        return this.props.isFetching;
    }

    add() {
        this.props.add(this.props.product._id);
    }

    buy() {
        alert('Success! =)');
    }

    render() {
        const { isLoggedIn, product } = this.props;
        return (
            <div className='product'>
                <div className='product-img-btns'>
                    <img src={`/static/images/${product._id}`} />
                    <div className='buttons'>
                        {
                            isLoggedIn
                            ? <button onClick={this.add}>Add to cart</button>
                            : null
                        }
                        <button onClick={this.buy}>Buy</button>
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
    isLoggedIn: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired,
    getById: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
};

export default Product;