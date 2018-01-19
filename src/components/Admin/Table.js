import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn, ButtonGroup } from 'react-bootstrap-table';

import SearchPanel from './components/SearchPanel';

class Table extends Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            page: 1,
            limit: 10,
            sort: null,
            order: null,
            search: null
        };

        this.state = this.defaultState;

        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
        this.renderButtonGroup = this.renderButtonGroup.bind(this);
        this.handleCleanSort = this.handleCleanSort.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSizePerPageList = this.handleSizePerPageList.bind(this);
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleCellEdit = this.handleCellEdit.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.renderSearchPanel = this.renderSearchPanel.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
        this.loadData();
    }

    onBackButtonEvent(event) {
        const info = event.state;
        const newState = (info && info.state) ? info.state : this.defaultState;
        this.searchPanel.setInputValue(newState.search);
        this.setState(newState, () => this.loadData());
    }

    loadData() {
        this.props.get(this.state);
    }

    updateContent() {
        const history = this.props.history;
        if (JSON.stringify(this.state) !== JSON.stringify(history.location.state)) {
            const query = new URLSearchParams();
            for (let key in this.state) {
                const value = this.state[key];
                if (value) query.set(key, value);
            }
            history.push({
                ...history.location,
                search: query.toString(),
                state: this.state
            });
        }
        this.loadData();
    }

    renderButtonGroup(props) {
        return (
            <ButtonGroup sizeClass='btn-group-md'>
                {props.insertBtn}
                {props.deleteBtn}
                <button className='btn btn-default' onClick={this.handleCleanSort}>
                    Reset sorting
                </button>
            </ButtonGroup>
        );
    }

    handleCleanSort() {
        this.table.cleanSort();
        this.setState({ sort: null, order: null }, () => this.updateContent());
    }

    handlePageChange(page) {
        this.setState({ page }, () => this.updateContent());
    }

    handleSizePerPageList(limit) {
        this.setState({ limit });
    }

    handleAddRow(row) {
        delete row._id;
        this.props.create(row);
    }

    handleCellEdit(row, fieldName, value) {
        this.props.update(row._id, { [fieldName]: value });
    }

    handleDeleteRow(rows) {
        this.props.remove(rows);
    }

    handleSortChange(sort, order) {
        this.setState({ sort, order }, () => this.updateContent());
    }

    renderSearchPanel(props) {
        return (
            <SearchPanel ref={search => this.searchPanel = search} {...props} />
        );
    }

    handleSearchChange(text) {
        this.setState({ page: 1, search: text || null }, () => this.updateContent());
    }

    render() {
        const { isFetching, data, count: dataTotalSize, fields } = this.props;
        const { page, limit: sizePerPage, sort: sortName, order: sortOrder } = this.state;
        return (
            <BootstrapTable
                ref={table => this.table = table}
                data={data}
                keyField='_id'
                striped
                remote
                pagination
                fetchInfo={{ dataTotalSize }}
                insertRow
                cellEdit={{ mode: 'dbclick' }}
                selectRow={{ mode: 'checkbox' }}
                deleteRow
                search
                searchPlaceholder='Full text search'
                options={{
                    btnGroup: this.renderButtonGroup,
                    noDataText: isFetching ? 'The data is loading' : null,
                    page,
                    paginationSize: 5,
                    onPageChange: this.handlePageChange,
                    sizePerPage,
                    onSizePerPageList: this.handleSizePerPageList,
                    onAddRow: this.handleAddRow,
                    onCellEdit: this.handleCellEdit,
                    onDeleteRow: this.handleDeleteRow,
                    sortName,
                    sortOrder,
                    onSortChange: this.handleSortChange,
                    searchPanel: this.renderSearchPanel,
                    onSearchChange: this.handleSearchChange,
                    clearSearch: true
                }}
            >
                {fields.map((field, i) => (
                    <TableHeaderColumn dataAlign='center' {...field} key={i}>
                        {field.title}
                    </TableHeaderColumn>
                ))}
            </BootstrapTable>
        );
    }
}

Table.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    fields: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Table;