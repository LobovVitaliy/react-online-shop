import React, { Component } from 'react';
import './index.scss';

import PropTypes from 'prop-types';

class CartItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className='item'>
                <div className='item-image'>
                    <img src={item.img} />
                </div>
                <div className='item-title'>
                    <h3><a>{item.title}</a></h3>
                </div>
                <div className='item-price'>
                    <h3>{item.price}</h3>
                </div>
                <div className='item-del-btn'>
                    <a>&#215;</a>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
};

export default CartItem;