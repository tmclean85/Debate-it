import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Debates,
         UserAtDebate
} from '../../../api/publications';
import DebateInterface from './DebateInterface';
import Loader from '../../components/Loader';

import './styles.css';

class DebateInterfaceContainer extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const users = this.props.users;
    const vote = this.props.userAtDebate
    const debate = this.props.debates[0];

    if (!debate) return <Loader />;
    return (
      (this.props.match.params.userId === Meteor.userId()) ? 
        <div className="debate-interface-page">
          <DebateInterface 
            users={users}
            vote={vote}
            debate={debate}
          />
        </div>
        : <p>Sorry, you've reached the wrong page. Please return to the homepage</p>
    )
  }
}

export default createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');

  return {
    debates: Debates.find({ _id: props.match.params.debateId }).fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch()
  };
}, DebateInterfaceContainer);