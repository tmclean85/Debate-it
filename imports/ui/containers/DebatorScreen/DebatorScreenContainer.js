import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import DebatorScreen from './DebatorScreen';  
import Loader from '../../components/Loader/'; 

import './styles.css';

class DebatorScreenContainer extends Component {

  handleAttend = (userId, debateId) => {
    Meteor.call('userAtDebate.attend', userId, debateId, Meteor.userId(), (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
    });
  }

  getDebate() {

    const users = this.props.users;
    let debate = this.props.debate;
    const userAtDebate = this.props.userAtDebate;

    if (debate && users && userAtDebate) {
      const yesUser = users.find(item => item._id === debate.yesUser_id);   
      debate.yesUser = { email: yesUser.emails[0].address, name: yesUser.profile.name };
      
      const noUser = users.find(item => item._id === debate.noUser_id);
      debate.noUser = { email: noUser.emails[0].address, name: noUser.profile.name };

      debate.userList = [];
      userAtDebate.forEach(item => {
        const usr = users.find(it => it._id === item.user_id);
        debate.userList.push({
          _id: usr._id,
          email: usr.emails[0].address,
          name: usr.profile.name,
          attended: item.attended,
          vote: item.vote
        });
      })
    }
    return debate;
  }

  render() {
    const debate = this.getDebate();

    if (!Meteor.userId()) {
      return <Redirect to="/login" />
    } else if (!debate) {
      return <Loader />;
    } else {
      return (
        <DebatorScreen 
          debate={debate}
          handleAttend={this.handleAttend}
        />
      );
    }
  }
}

export default createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');

  return {
    users: Meteor.users.find().fetch(),
    debate: Debates.find({ _id: props.match.params.debateId }).fetch()[0],
    userAtDebate: UserAtDebate.find({ debate_id: props.match.params.debateId }).fetch()
  };
}, DebatorScreenContainer);