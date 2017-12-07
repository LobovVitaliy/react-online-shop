import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';
import NotFound from '../NotFound';

class Cart extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        if (!this.props.isLoggedIn) return <NotFound />;
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
    isLoggedIn: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Cart;