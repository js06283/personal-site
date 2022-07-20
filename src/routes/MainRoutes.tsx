import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Home as AsyncHome,
  Engineering as AsyncEngineering,
  Resume as AsyncResume, 
  PageNotFound as AsyncPageNotFound,
  Research as AsyncResearch, 
  Art as AsyncArt,
} from './routes';
import PrivateRoute from '../components/privateRoute';

const MainRoutes = () => {
  return (
    <Switch>
      {/* public views: */}
      <Route exact path="/">
        <AsyncHome />
      </Route>

      <Route path="/engineering">
        <AsyncEngineering />
      </Route>

      <Route path="/research">
        <AsyncResearch />
      </Route>

      <Route path="/resume">
        <AsyncResume />
      </Route>

      <Route path="/art">
        <AsyncArt/>
      </Route>

      <Route path="*">
        <AsyncPageNotFound />
      </Route>
    </Switch>
  );
};

export default MainRoutes;
