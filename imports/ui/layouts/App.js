import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Home from '../containers/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlinioTests from '../containers/PlinioTests';
import Layout from '../components/Layout';


const App = props => (
  <MuiThemeProvider>
    <Router>
          <Switch>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/plinio" component={PlinioTests} /> 
            </Layout>
            {/* <Route component={NotFound} /> */}
          </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;