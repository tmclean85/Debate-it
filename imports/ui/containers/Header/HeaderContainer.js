import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Debates,
         UserAtDebate  
} from '../../../api/publications';
import Header from './Header';

class HeaderContainer extends Component {

  render() {

  const userDebateId = this.props.userAtDebate[0];
  const currentDebator = this.props.debates;

    return (
      <Header 
        userAtDebateId={userDebateId} 
        currentDebator={currentDebator[0]}
      />
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('userAtDebate');
  
  return {
    debates: Debates.find({ $or: [ { yesUser_id: Meteor.userId() }, { noUser_id: Meteor.userId() } ] }).fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find({ user_id: Meteor.userId() }).fetch()
  };
}, HeaderContainer);