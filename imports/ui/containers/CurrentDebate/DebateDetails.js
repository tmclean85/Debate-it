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

const DebateDetails = ({ debateData, yesUserData, noUserData, joinDebateSubmit }) => (
    <Card>
        <div className="debate-title-wrapper">
            <div>
                <div className="debate-time-wrapper">
                    <Subheader>{`START: ${Moment(debateData.start).format("h:mma")}`}</Subheader>
                    <Subheader>{`END: ${Moment(debateData.end).format("h:mma")}`}</Subheader>
                </div>
                <Divider />
                <Subheader>{`LOCATION: ${debateData.location.toUpperCase()}`}</Subheader>
            </div>
            <CardActions>
                <RaisedButton
                    label="JOIN"
                    primary
                    onTouchTap={() => joinDebateSubmit()}
                />
            </CardActions>
        </div>
        <CardTitle
            title={`${debateData.question}?`}
        />
        <div className="debators-wrapper">
            <Paper zDepth={1}>

                    <CardHeader
                        className="position-header"
                        title={`${yesUserData.profile.name}`}
                        avatar={<Gravatar email={yesUserData.emails[0].address} />}
                    />
                YES because...
                <CardText>
                    {`${debateData.yesBecause}`}
                </CardText>
            </Paper>
            <Paper zDepth={1}>
                
                    <CardHeader
                        className="position-header"
                        //title={`${noUserData.profile.name}`}
                        //avatar={<Gravatar email={noUserData.emails[0].address} />} 
                    />
                NO because...
                <CardText>
                    {`${debateData.noBecause}`}
                </CardText>
            </Paper>
        </div>
    </Card>
);

export default DebateDetails;



