import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  render() {
    return (
      <SignUp />
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
    users: Users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, SignUpContainer);