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

import './styles.css';

class DebateInterfaceContainer extends Component {

  onChangeHandler(name, value) {
    this.props.dispatch(captureUserVote(name, value));
  }

  onSubmit() {
    //e.preventDefault();
    const debateId = this.props.match.params.debateId;
    const vote = (this.props.userVote === "null") ? null : Boolean(this.props.userVote);
    const loggedId = Meteor.userId();

    console.log(vote);

    //(debateId, vote, loggedId)
    Meteor.call('userAtDebate.vote',  {
        debateId,
        vote,
        loggedId
      }
    );
  }

  render() {
    const users = this.props.users;
    const vote = this.props.userAtDebate
    const debate = this.props.debates[0];

    console.log(Meteor.userId());

    if (!debate) return <Loader />;
    return (
      (this.props.match.params.userId === Meteor.userId()) ?
          <DebateInterface
            users={users}
            vote={vote}
            debate={debate}
            getValue={getValue}
            onChange={this.onChangeHandler.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
          />
        : <p>Sorry, you've reached the wrong page. Please return to the homepage</p>
    )
  }
}

function mapStateToProps(state) {
  return {
    userVote: state.vote.userVote
  };
}

const debateInterfaceContainer = createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');

  return {
    debates: Debates.find({ _id: props.match.params.debateId }).fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch()
  };
}, DebateInterfaceContainer);

export default connect(mapStateToProps)(debateInterfaceContainer);
