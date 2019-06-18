import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PostPage from './containers/PostPage';
import NotFound from './containers/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/post/:slug" component={PostPage}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;