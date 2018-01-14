import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import CartItem from './CartItem';

class Cart extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        const { isFetching, items, remove } = this.props;

        if (isFetching) return <Loading />;
        return (
            <div className='col-lg-20'>
                {items.length ? items.map((item, i) => (
                    <CartItem item={item} remove={remove} key={i} />
                )) : <h3>The cart is empty</h3>}
            </div>
        );
    }
}

Cart.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Cart;