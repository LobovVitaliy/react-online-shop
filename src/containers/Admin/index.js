import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

import Page from '../../components/Admin/Page';
import AdminRouter from './AdminRouter';
import NotFound from '../../components/NotFound';
import NotificationBar from '../NotificationBar';

const Admin = (props) => (
    <Fragment>
        <Page routes={routes}>
            <Switch>
                <Route path='/admin(.html)?' component={AdminRouter} />
                <Route component={NotFound} />
            </Switch>
        </Page>
        <NotificationBar />
    </Fragment>
);

export default Admin;