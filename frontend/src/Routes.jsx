import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PostPage from './containers/PostPage';
import NotFound from './containers/NotFound'
import WriteForUs from './containers/WriteForUs'
import Faq from './containers/Faq'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/post/:slug" component={PostPage}/>
    <Route exact path="/write-for-us" component={WriteForUs}/>
    <Route exact path="/faq" component={Faq}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;