import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Debates,
         UserAtDebate  
} from '../../../api/publications';
import Header from './Header';

class HeaderContainer extends Component {
  
  render() {

  const userDebateId = this.props.userAtDebate[0];
  const currentDebator = this.props.debates.filter(debate => Meteor.userId() === (debate.yesUser_id || debate.noUser_id));

  console.log(currentDebator);

    return (
      <Header 
        userDebateId={userDebateId} 
        currentDebatorId={currentDebator[0]}
      />
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