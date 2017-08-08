import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import Home from '../containers/Home';
import store from '../../redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlinioTests from '../containers/PlinioTests';
import CurrentDebate from '../containers/CurrentDebate';
import Layout from '../components/Layout';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';

injectTapEventPlugin();

const App = props => (
    <MuiThemeProvider>
      <Provider store={store}>  
        <Router>
              <Switch>
                <Layout>
                  <Route exact path="/" component={Home} />
                  <Route path="/plinio" component={PlinioTests} />
                  <Route path="/currentDebate" component={CurrentDebate} /> 
                  <Route path="/profile" component={Profile} /> 
                  <Route path="/404" component={NotFound} /> 
                </Layout>
              </Switch>
        </Router>
      </Provider>
  </MuiThemeProvider>
);

export default App;