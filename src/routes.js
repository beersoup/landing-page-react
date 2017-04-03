import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Inspiration from './components/inspiration';
import HowTo from './components/how-to';
import Feature from './components/feature';
import Campaigns from './components/campaigns';


export default () => {

    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={App}></IndexRoute>
                <Route path="inspiration" component={Inspiration}></Route>
                <Route path="feature" component={Feature}></Route>
                <Route path="how-to" component={HowTo}></Route>
                <Route path="campaigns" component={Campaigns}></Route>
            </Route>
        </Router>
    );
}