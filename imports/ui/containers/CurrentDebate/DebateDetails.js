import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './styles';

const DebateAttendees = () => (
    <Card>
        <div className="debate-title-wrapper">
            <div>
                <Subheader>LOCATION: IN THE KITCHEN</Subheader>
                <Divider />
                <Subheader>DURATION: 35 MINUTES</Subheader>
            </div>

            <CardActions>
                <RaisedButton label="JOIN" primary />
            </CardActions>
        </div>
        <CardTitle
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin."
        />
        <div className="debators-wrapper">
            <Paper zDepth={1}>
                <CardHeader
                    title="URL Avatar"
                    avatar="images/jsa-128.jpg"
                >
                    YES because...
                </CardHeader>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Paper>
            <Paper zDepth={1}>
                <CardHeader
                    title="URL Avatar"
                    avatar="images/jsa-128.jpg"
                >
                    NO because...
                </CardHeader>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Paper>
        </div>
    </Card>
);

export default DebateAttendees;



