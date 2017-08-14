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

const DebateDetails = ({ debate, joinDebateSubmit }) => (
  <Card>
    <div className="debate-title-wrapper">
      <div>
        <div className="debate-time-wrapper">
          <Subheader><span className="debate-details-span">START: </span>{Moment(debate.start).format("h:mma")}</Subheader>
          <Subheader><span className="debate-details-span">END: </span>{Moment(debate.end).format("h:mma")}</Subheader>
        </div>
        <Divider />
        <Subheader><span className="debate-details-span">LOCATION: </span>{debate.location.toUpperCase()}</Subheader>
      </div>
      <CardActions>
        <RaisedButton
          label="JOIN"
          primary
          onClick={() => joinDebateSubmit(Meteor.userId(), debate._id)}
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
        <div className="debator-reasoning">
          <span className="debator-current-position">YES</span> because...
        </div>
        <CardText>
          {debate.yesBecause}
        </CardText>
      </Paper>
      <Paper zDepth={1}>
        <CardHeader
          className="position-header"
          title={debate.noUser.name}
          avatar={<Gravatar email={debate.noUser.email} />}
        />
        <div className="debator-reasoning">
          <span className="debator-current-position">NO</span> because...
        </div>
        <CardText>
          {debate.noBecause}
        </CardText>
      </Paper>
    </div>
  </Card>
);

export default DebateDetails;



