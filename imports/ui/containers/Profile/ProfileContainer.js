import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate
} from '../../../api/publications';
import Profile from './Profile';

class ProfileContainer extends Component {

  render() {
    const thisUser = this.props.userLogged;
    const userData = this.props.users;
    return (
        <Profile 
          userLogged={ thisUser }
        />
    )
  }
}

export default createContainer(() => {
  // Meteor.subscribe('debates');
  Meteor.subscribe('users');
  // Meteor.subscribe('userAtDebate');
  // Meteor.subscribe('organizations');
  
  
  return {
    userLogged: Meteor.users.find({_id: Meteor.userId()}).fetch()[0],
    // debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    // userAtDebate: UserAtDebate.find().fetch(),
    // organizations: Organizations.find().fetch()
  };
}, ProfileContainer);