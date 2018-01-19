import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import routes from './routes';
import NotFound from '../../components/NotFound';

const AdminRouter = ({ match }) => (
    <Switch>
        <Redirect exact from={match.url} to={routes[0].path} />
        {routes.map((item, i) => (
            <Route exact path={item.path} component={item.component} key={i} />
        ))}
        <Route component={NotFound} />
    </Switch>
);

export default AdminRouter;