import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {routes} from "../../routes";
import {HOME_PAGE} from "../../utils/routesConsts";

const AppRouter = () => {
    return (
        <Switch>
            { routes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_PAGE} />
        </Switch>
    );
};

export default AppRouter;
