import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Home from '../containers/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlinioTests from '../containers/PlinioTests';
import CurrentDebate from '../containers/CurrentDebate';
import Layout from '../components/Layout';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';


const App = props => (
  <MuiThemeProvider>
    <Router>
          <Switch>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/plinio" component={PlinioTests} />
              <Route path="/currentDebate" component={CurrentDebate} /> 
              <Route path="/profile" component={Profile} /> 
              {/* <Route component={NotFound} /> */}
            </Layout>
          </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;