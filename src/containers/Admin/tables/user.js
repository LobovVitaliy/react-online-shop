export default [
    {
        dataField: '_id',
        title: 'User ID',
        hiddenOnInsert: true
    },
    {
        dataField: 'mail',
        title: 'Mail',
        dataSort: true,
        editable: {
            readOnly: true,
            validator: value => {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!value) {
                    return 'Mail is required!';
                }
                if (!value.match(regex)) {
                    return 'Mail is not valid!';
                }
                return true;
            }
        }
    },
    {
        dataField: 'password',
        title: 'Password',
        hidden: true,
        editable: {
            validator: value => {
                if (!value) {
                    return 'Password is required!';
                }
                if (value.length < 4) {
                    return 'Password must have 4+ characters!';
                }
                return true;
            }
        }
    },
    {
        dataField: 'role',
        title: 'Role',
        dataSort: true,
        editable: {
            type: 'select',
            options: {
                values: ['user', 'admin']
            }
        }
    }
];