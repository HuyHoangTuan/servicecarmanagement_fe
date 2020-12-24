import React from 'react';
import { Route, Switch } from 'react-router';
import  HomeRoute from './HomeRoute';
import CarListRoute from './CarListRoute';
import ScheduleRoute from './ScheduleRoute';
function MainRoute(props)
{
    return(
        <div>
            <Switch>
                <Route component ={HomeRoute} exact path="/"/>
                <Route component ={CarListRoute} path='/carlist'/>
                <Route component ={ScheduleRoute} path='/schedule'/>
            </Switch>
        </div>
    )
}

export default MainRoute;