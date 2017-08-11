import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import Login from './Login';

class LoginContainer extends Component {
  render() {
    return (
      <Login />
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, LoginContainer);