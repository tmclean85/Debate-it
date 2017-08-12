
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import DebateResults from './DebateResults';
import Loader from '../../components/Loader';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import './styles.css';
        

class DebateResultsContainer extends Component {
  render() {
    const { users, userAtDebate } = this.props;
    const debateInfo = this.props.debates[0];

    if (!debateInfo) return <Loader />;
    return (
      <div className="debate-results-page">
        <DebateResults 
          users={users} 
          userAtDebate={userAtDebate}
          debateInfo={debateInfo} 
        />
      </div>  
    )
  }
};

export default createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    debates: Debates.find({ _id: props.match.params.id }).fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateResultsContainer);