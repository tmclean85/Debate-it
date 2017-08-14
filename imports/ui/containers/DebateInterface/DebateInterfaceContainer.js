import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { setValue, getValue } from 'neoform-plain-object-helpers';
import { connect } from 'react-redux';
import {
  Debates,
  UserAtDebate
} from '../../../api/publications';
import DebateInterface from './DebateInterface';
import { captureUserVote } from '../../../redux/modules/vote';
import Loader from '../../components/Loader';
import { Redirect } from 'react-router-dom';

import './styles.css';

class DebateInterfaceContainer extends Component {

  getDebate() {

    const users = this.props.users;
    let debate = this.props.debate;
    const userAtDebate = this.props.userAtDebate;

    if (debate && users && userAtDebate) {
      const yesUser = users.find(item => item._id === debate.yesUser_id);
      debate.yesUser = { email: yesUser.emails[0].address, name: yesUser.profile.name };

      const noUser = users.find(item => item._id === debate.noUser_id);
      debate.noUser = { email: noUser.emails[0].address, name: noUser.profile.name };

    }
    return debate;
  }

  onChangeHandler(name, value) {
    this.props.dispatch(captureUserVote(name, value));
  }

  onSubmit() {
    const debateId = this.props.match.params.debateId;
    const vote = (this.props.userVote === "null") ? null : Boolean(this.props.userVote);
    const because = this.props.because;
    const loggedId = Meteor.userId();

    Meteor.call('userAtDebate.vote', debateId, vote, because, loggedId);
  }

  render() {
    const debate = this.getDebate();

    if (!Meteor.userId()) {
      return <Redirect to="/login" />
    } else if (!debate) {
      return <Loader />;
    } else {
      return (
        (this.props.match.params.userId === Meteor.userId()) ?
          <DebateInterface
            debate={debate || {}}
            getValue={getValue}
            onChange={this.onChangeHandler.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
          />
        : <Redirect to="/" />
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    userVote: state.vote.userVote,
    because: state.vote.because
  };
}

const debateInterfaceContainer = createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');

  return {
    users: Meteor.users.find().fetch(),
    debate: Debates.find({ _id: props.match.params.debateId }).fetch()[0],
    userAtDebate: UserAtDebate.find().fetch()
  };
}, DebateInterfaceContainer);

export default connect(mapStateToProps)(debateInterfaceContainer);
