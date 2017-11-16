import React from 'react';
import './index.scss';

import img from '../../../static/images/img1.jpg';

const Product = (props) => {
    const product = props.product;
    return (
        <div className='product'>
            <div className='product-img-btns'>
                <img src={img} />
                <div className='buttons'>
                    <button>Add to bag</button>
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

export default Product;