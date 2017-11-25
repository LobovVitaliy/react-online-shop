import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

import { getProducts } from '../../redux/actions/products';
import Card from '../../components/Card';

class Products extends Component {
    componentDidMount() {
        this.props.loadProducts();
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

const mapStateToProps = state => ({ products: state.products.data });

const mapDispatchToProps = dispatch => ({
    loadProducts: () => {
        dispatch(getProducts());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);