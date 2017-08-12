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

injectTapEventPlugin();

const App = props => (
  <MuiThemeProvider>
    <Provider store={store}>
    <Router>
          <Switch>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route exact path="/plinio" component={PlinioTests} />
              <Route exact path="/debate/:id" component={CurrentDebate} /> 
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/interface" component={DebateInterface} />
              <Route exact path="/results" component={DebateResults} />
              <Route exact path="/createdebate" component={DebateCreate} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/debatorscreen" component={DebatorScreen} />
              <Route exact path="404" component={NotFound} />
            </Layout>
          </Switch>
    </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;