import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Pagination from 'react-js-pagination';

import Card from '../Card';
import NotFound from '../NotFound';

class Products extends Component {
    constructor(props) {
        super(props);
        this.limit = 2;

        this.handleChangePage = this.handleChangePage.bind(this);
    }

    loadProducts() {
        this.props.getProducts(this.props.match.params.page, this.limit);
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.loadProducts();
        }
    }

    handleChangePage(page) {
        this.props.history.push(`/products/${page}`);
    }

    getPage() {
        const page = Number(this.props.match.params.page);
        if (!page || page <= 0 || page >= this.props.products.count / this.limit + 1) {
            return null;
        }
        return page;
    }

    render() {
        const products = this.props.products;
        const page = this.getPage();

        if (!page) return <NotFound />;
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
                        activePage={page}
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