import ProductTable from './containers/ProductTable';
import UserTable from './containers/UserTable';

export default [
    {
        text: 'Products',
        path: '/admin/product-table',
        component: ProductTable
    },
    {
        text: 'Users',
        path: '/admin/user-table',
        component: UserTable
    }
];