import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Home from '../containers/Home';
// import PlinioTests from '../containers/PlinioTests';


const App = props => (
  <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/plinio" component={PlinioTests} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
  </Router>
);

export default App;