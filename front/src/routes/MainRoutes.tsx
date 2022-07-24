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
      <Route exact path="/jessica-shi">
        <AsyncHome />
      </Route>

      <Route path="/jessica-shi/engineering">
        <AsyncEngineering />
      </Route>

      <Route path="/jessica-shi/research">
        <AsyncResearch />
      </Route>

      <Route path="/jessica-shi/resume">
        <AsyncResume />
      </Route>

      <Route path="/jessica-shi/art">
        <AsyncArt />
      </Route>

      <Route path="*">
        <AsyncPageNotFound />
      </Route>
    </Switch>
  );
};

export default MainRoutes;
