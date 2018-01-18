import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Pagination from 'react-js-pagination';

import Card from '../Card';
import Loading from '../Loading';
import NotFound from '../NotFound';

class Products extends Component {
    constructor(props) {
        super(props);
        this.limit = 5;

        this.handleChangePage = this.handleChangePage.bind(this);
    }

    loadProducts() {
        this.props.get(this.props.match.params.page, this.limit);
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
        if (!page || page <= 0 || page >= this.props.count / this.limit + 1) {
            return null;
        }
        return page;
    }

    render() {
        const { isFetching, products, count } = this.props;
        const page = this.getPage();

        if (isFetching) return <Loading />;
        if (!page) return <NotFound />;
        return (
            <div>
                <div className='clearfix'>
                    {products.map((product, i) => (
                        <div className='card-col' key={i}>
                            <Card card={product} />
                        </div>
                    ))}
                </div>
                <div className='col-lg-20 pagination-block'>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={this.limit}
                        totalItemsCount={count}
                        pageRangeDisplayed={4}
                        onChange={this.handleChangePage}
                    />
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    get: PropTypes.func.isRequired
};

export default Products;