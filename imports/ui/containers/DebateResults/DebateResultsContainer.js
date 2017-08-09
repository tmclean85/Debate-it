
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { createContainer } from 'meteor/react-meteor-data';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
import './styles.css';
        

class DebateResultsContainer extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="debate-results-page">
        <div className="debate-results-wrapper">
          <Card className="debate-results-card">
            <CardHeader
              className="results-header"
              title="Results"
              subtitle="Debate title"
            />
            <div className="results-meta-box">
              <div className="results-meta-winner">
                <h1>WINNER!</h1>
                <h2>12 Votes</h2>
                <h2>4 Good Points</h2>
                <Avatar size={60} src="" />
              </div>  
              <div className="results-meta-loser">
                <h1>LOSER!</h1>
                <h2>10 Votes</h2>
                <h2>6 Good Points</h2>
                <Avatar size={60} src="" />                
              </div>                
            </div>  
            <div className="interface-attendees-box">
              {users.map(user =>
                (<DebateAttendees 
                  userData={user} 
                  key={user._id}
                />)
              )}           
            </div>  
          </Card>  
        </div>  
      </div>  
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateResultsContainer);