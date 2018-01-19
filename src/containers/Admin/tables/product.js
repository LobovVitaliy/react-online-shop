import React from 'react';

import FileInput from '../../../components/Admin/components/FileInput';
import FileInputEditor from '../../../components/Admin/components/FileInputEditor';

export default [
    {
        dataField: '_id',
        title: 'Product ID',
        hiddenOnInsert: true
    },
    {
        dataField: 'image',
        title: 'Image',
        tdStyle: {
            background: 'white'
        },
        customInsertEditor: {
            getElement: (column, attr) => (
                <FileInput { ...attr } />
            )
        },
        customEditor: {
            getElement: (onUpdate, props) => (
                <FileInputEditor onUpdate={onUpdate} {...props} />
            )
        },
        dataFormat: (cell, row) => (
            <img src={`/static/images/${row.image}`} height={50} />
        )
    },
    {
        dataField: 'title',
        title: 'Title',
        dataSort: true,
        editable: {
            validator: value => {
                if (!value) {
                    return 'Title is not allowed to be empty!';
                }
                if (value.length > 25) {
                    return 'Title length must be less than or equal to 25 characters!';
                }
                return true;
            }
        }
    },
    {
        dataField: 'text',
        title: 'Description',
        editable: {
            type: 'textarea',
            validator: value => {
                if (!value) {
                    return 'Description is not allowed to be empty!';
                }
                if (value.length > 500) {
                    return 'Description length must be less than or equal to 500 characters!';
                }
                return true;
            }
        }
    },
    {
        dataField: 'price',
        title: 'Price',
        dataSort: true,
        editable: {
            validator: value => {
                if (!value) {
                    return 'Price is not allowed to be empty!';
                }
                if (isNaN(+value) || value < 0) {
                    return 'Price must be a positive integer!';
                }
                return true;
            }
        }
    }
];