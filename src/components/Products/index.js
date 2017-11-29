import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Card from '../Card';
import Pagination from 'react-js-pagination';

class Products extends Component {
    constructor(props) {
        super(props);

        this.limit = 2;
        this.state = {
            page: 1
        };

        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        this.props.getProducts(query.get('page'), this.limit);
    }

    handleChangePage(page) {
        this.props.history.push(`/products?page=${page}`);
        this.setState({ page });
        this.props.getProducts(page, this.limit);
    }

    render() {
        const products = this.props.products;
        return (
            <div>
                <div className='clearfix'>
                    {products.data.map((card, i) => (
                        <div className='card-col' key={i}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
                <div className='col-lg-20 pagination-block'>
                    <Pagination
                        activePage={this.state.page}
                        itemsCountPerPage={this.limit}
                        totalItemsCount={products.count}
                        pageRangeDisplayed={4}
                        onChange={this.handleChangePage}
                    />
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired
};

export default Products;