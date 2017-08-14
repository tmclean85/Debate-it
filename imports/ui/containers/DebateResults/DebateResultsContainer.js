
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import DebateResults from './DebateResults';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Loader from '../../components/Loader';
import Gravatar from 'react-gravatar';
import {
  Organizations,
  Users,
  Debates,
  UserAtDebate
} from '../../../api/publications';
import './styles.css';


class DebateResultsContainer extends Component {

  calculateWinner() {
    const debateResult = this.props.debateResult;
    const debateInfo = this.props.debates[0];
    const yesUser = this.props.users.filter(user => user._id === debateInfo.yesUser_id);
    const noUser = this.props.users.filter(user => user._id === debateInfo.noUser_id);
    const yesVotes = debateResult.filter(user => user.vote === true);
    const noVotes = debateResult.filter(user => user.vote === false);
    let winner = '';
    let voteNum = 0;

    // if (yesVotes.length > noVotes.length) {
    //   winner = yesUser[0].profile.name;
    //   voteNum = yesVotes.length;
    // } else if (noVotes.length > yesVotes.length) {
    //   winner = noUser[0].profile.name;
    //   voteNum = noVotes.length;
    // } else {
    //   console.log(`It's a draw. No one wins!`);
    // }

    // return (
    //   <div>
    //     <h1>WINNER!</h1>
    //     <p>{winner}</p>
    //     <h2>{`${voteNum} votes`}</h2>
    //   </div>
    // );
  }


  calculateLoser() {
    const debateResult = this.props.debateResult;
    const debateInfo = this.props.debates[0];
    const yesUser = this.props.users.filter(user => user._id === debateInfo.yesUser_id);
    const noUser = this.props.users.filter(user => user._id === debateInfo.noUser_id);
    const yesVotes = debateResult.filter(user => user.vote === true);
    const noVotes = debateResult.filter(user => user.vote === false);
    let loser = '';
    let voteNum = 0;

    if (yesVotes.length < noVotes.length) {
      loser = yesUser[0];
      voteNum = yesVotes.length;
    } else if (noVotes.length < yesVotes.length) {
      loser = noUser[0];
      voteNum = noVotes.length;
    } else {
      console.log(`It's a draw. No one wins!`);
    }

    // return (
    //   <Card>
    //     <CardHeader
    //       title={loser.profile.name}
    //       subtitle="Subtitle"
    //       avatar={<Gravatar email={loser.emails[0].address} />} 
    //     />
    //     <CardTitle title="WINNER" subtitle={`${voteNum} votes`} />
    //   </Card>
    //   );
  }

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
          calculateResults={this.calculateWinner.bind(this)}
          calculateLoser={this.calculateLoser.bind(this)}
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
    debateResult: UserAtDebate.find({ debate_id: props.match.params.id }).fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateResultsContainer);