import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Gravatar from 'react-gravatar';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './styles';

// I HAVE REMOVED LINKING 

//<Link to={`/profile/${noUserData._id}`}>

const DebateDetails = ({ debate, joinDebateSubmit }) => (
  <Card>
    <div className="debate-title-wrapper">
      <div>
        <div className="debate-time-wrapper">
          <Subheader>START: {Moment(debate.start).format("h:mma")}</Subheader>
          <Subheader>END:{Moment(debate.end).format("h:mma")}</Subheader>
        </div>
        <Divider />
        <Subheader>{'LOCATION: ' + debate.location.toUpperCase()}</Subheader>
      </div>
      <CardActions>
        <RaisedButton
          label="JOIN"
          primary
          onTouchTap={() => joinDebateSubmit(debate.id, Meteor.userId())}
        />
      </CardActions>
    </div>
    <CardTitle
      title={debate.question + '?'}
    />
    <div className="debators-wrapper">
      <Paper zDepth={1}>
        <CardHeader
          className="position-header"
          title={debate.yesUser.name}
          avatar={<Gravatar email={debate.yesUser.email} />}
        />
        YES because...
        <CardText>
          {debate.yesBecause}`}
        </CardText>
      </Paper>
      <Paper zDepth={1}>
        <CardHeader
          className="position-header"
          title={debate.noUser.name}
          avatar={<Gravatar email={debate.noUser.email} />}
        />
        NO because...
        <CardText>
          {'debateData.noBecause'}
        </CardText>
      </Paper>
    </div>
  </Card>
);

export default DebateDetails;



