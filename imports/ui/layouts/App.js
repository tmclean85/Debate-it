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
import DebateCreate from '../containers/DebateCreate';
import DebateInterface from '../containers/DebateInterface';
import DebateResults from '../containers/DebateResults';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import DebatorScreen from '../containers/DebatorScreen';
import PrivateRoute from '../components/PrivateRoute';

injectTapEventPlugin();

const App = props => (
  <MuiThemeProvider>
    <Provider store={store}>
    <Router>
          <Switch>
            <Layout>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/plinio" component={PlinioTests} />
              <PrivateRoute exact path="/debate/:id" component={CurrentDebate} /> 
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/debate/:debateId/user/:userId/interface" component={DebateInterface} />
              <PrivateRoute exact path="/results/:id" component={DebateResults} />
              <PrivateRoute exact path="/createdebate" component={DebateCreate} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} /> 
              <PrivateRoute exact path="/debate/:debateId/user/:userId/debatorscreen" component={DebatorScreen} />
              <PrivateRoute exact path="404" component={NotFound} />
            </Layout>
          </Switch>
    </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;