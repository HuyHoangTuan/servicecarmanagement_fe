import React from 'react';
import { Route, Switch } from 'react-router';
import  HomeRoute from './HomeRoute';
import CarListRoute from './CarListRoute';
function MainRoute(props)
{
    return(
        <div>
            <Switch>
                <Route component ={HomeRoute} exact path="/"/>
                <Route component ={CarListRoute} exact path='carlist'/>
            </Switch>
        </div>
    )
}

export default MainRoute;