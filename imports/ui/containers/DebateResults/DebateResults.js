import React from 'react';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const DebateResults = ({ users, userAtDebate, debateInfo }) => (
    <div className="debate-results-wrapper">
        <Card className="debate-results-card">
            <CardHeader
                className="results-header"
                title={`${debateInfo.question}?`}
                subtitle="Results"
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
                {/* {users.map(user =>
                    (<DebateAttendees
                        userData={user}
                        key={user._id}
                    />)
                )} */}
            </div>
        </Card>
    </div>
);

export default DebateResults;
