import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Debates,
         UserAtDebate  
} from '../../../api/publications';
import Header from './Header';

class HeaderContainer extends Component {
  
  render() {

  const userDebateId = this.props.userAtDebate[0];

    return (
      <Header userDebateId={userDebateId} />
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('userAtDebate');
  
  return {
    debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find({ user_id: Meteor.userId() }).fetch()
  };
}, HeaderContainer);