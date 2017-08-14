
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import DebateResults from './DebateResults';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Loader from '../../components/Loader';
import Gravatar from 'react-gravatar';
import {
  Users,
  Debates,
  UserAtDebate
} from '../../../api/publications';
import './styles.css';


class DebateResultsContainer extends Component {

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
          vote: item.vote,
          because: item.because
        });
      })

      debate.yesVotes = debate.userList.filter(item => item.vote === true).length;
      debate.noVotes = debate.userList.filter(item => item.vote === false).length;
      debate.undecidedVotes = debate.userList.filter(item => item.vote === null).length;

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
        <div className="debate-results-page">
          <DebateResults
            debate={debate || {}}
          />
        </div>
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
    debate: Debates.find({ _id: props.match.params.id }).fetch()[0],
    userAtDebate: UserAtDebate.find({ debate_id: props.match.params.id }).fetch()
  };
}, DebateResultsContainer);
