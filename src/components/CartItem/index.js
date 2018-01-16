import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import { Link } from 'react-router-dom';

class CartItem extends Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.item._id);
    }

    render() {
        const item = this.props.item;
        return (
            <div className='item'>
                <div className='item-image'>
                    <img src={`/static/images/${item.image}`} />
                </div>
                <div className='item-title'>
                    <h3>
                        <Link to={`/product/${item._id}`}>{item.title}</Link>
                    </h3>
                </div>
                <div className='item-price'>
                    <h3>{item.price}</h3>
                </div>
                <div className='item-del-btn'>
                    <a onClick={this.handleRemove}>&#215;</a>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
};

export default CartItem;