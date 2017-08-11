import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './styles';

const DebateDetails = ({ debateData }) => (
    <Card>
        {console.log(debateData)}
        <div className="debate-title-wrapper">
            <div>
                <div className="debate-time-wrapper">
                    <Subheader>{`START: ${Moment(debateData.start).format("h:mm a")}`}</Subheader>
                    <Subheader>{`END: ${Moment(debateData.end).format("h:mm a")}`}</Subheader>
                </div>
                <Divider />
                <Subheader>{`LOCATION: ${debateData.location.toUpperCase()}`}</Subheader>
            </div>
            <CardActions>
                <RaisedButton label="JOIN" primary />
            </CardActions>
        </div>
        <CardTitle
            title={`${debateData.question}?`}
        />
        <div className="debators-wrapper">
            <Paper zDepth={1}>
                <CardHeader
                    title={`${debateData.yesUser_id}`}
                    avatar="images/jsa-128.jpg"
                >
                    YES because...
                </CardHeader>
                <CardText>
                    {`${debateData.yesBecause}`}
                </CardText>
            </Paper>
            <Paper zDepth={1}>
                <CardHeader
                    title={`${debateData.yesUser_id}`}
                    avatar="images/jsa-128.jpg"
                >
                    NO because...
                </CardHeader>
                <CardText>
                    {`${debateData.noBecause}`}
                </CardText>
            </Paper>
        </div>
    </Card>
);

export default DebateDetails;



