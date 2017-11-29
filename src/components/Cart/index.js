import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';

class Cart extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        return (
            <div className='col-lg-20'>
                {this.props.items.map((item, i) => (
                    <CartItem
                        item={item}
                        remove={this.props.remove}
                        key={i}
                    />
                ))}
            </div>
        );
    }
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Cart;