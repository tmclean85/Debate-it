
import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionStars from 'material-ui/svg-icons/action/stars';
import Gravatar from 'react-gravatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../styles';

const DebatorResultCard = ({ email, title, status, position, votes }) => (
    <Paper zDepth={1}>
        <div className="debator-status-header">
            <h1>{status}</h1>
        </div>
        <CardHeader
            title={title}
            subtitle={
                <div>
                    POSITION:
                        <span className="debate-position">
                        {position}
                        </span>
                </div>
            }
            avatar={<Gravatar email={email} />}
        />
        <List>
            <ListItem
                primaryText={
                    <div>
                        VOTES -
                            <span className="result-stat">
                            {votes}
                            </span>
                    </div>
                }
                leftIcon={<ContentInbox />}
            />
            {/* <ListItem
                primaryText={
                    <div>
                        GOOD POINTS -
                            <span className="result-stat">
                            3
                            </span>
                    </div>
                }
                leftIcon={<ActionStars />}
            /> */}
        </List>
    </Paper>
);

export default DebatorResultCard;
