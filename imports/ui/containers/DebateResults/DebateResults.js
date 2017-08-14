import React from 'react';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionStars from 'material-ui/svg-icons/action/stars';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

import Avatar from 'material-ui/Avatar';
import Masonry from 'react-masonry-component';

const DebateResults = ({ users, userAtDebate, debateInfo, calculateResults, calculateLoser }) => (
    <div className="debate-results-wrapper">
        <Paper zDepth={2}>
            <div className="debate-results-header">
                <h1>Debate Results</h1>
            </div>
            <Card>
                <CardTitle
                    title={`Should Scientists Mix Animal Cells with Human Cells?`}
                    className="debate-results-question"
                />
                <div className="debators-results-wrapper">
                    <Paper zDepth={1}>
                        <div className="debator-status-header">
                            <h1>Winner!</h1>
                        </div>
                        <CardHeader
                            title="James"
                            subtitle={
                                <div>
                                    POSITION:
                                    <span className="debate-position">
                                        YES
                                    </span>
                                </div>
                            }
                            avatar={""}
                        />
                        <List>
                            <ListItem
                                primaryText={
                                    <div>
                                        VOTES -
                                        <span className="result-stat">
                                            10
                                        </span>
                                    </div>
                                }
                                leftIcon={<ContentInbox />}
                            />
                            <ListItem
                                primaryText={
                                    <div>
                                        GOOD POINTS -
                                        <span className="result-stat">
                                            7
                                        </span>
                                    </div>
                                }
                                leftIcon={<ActionStars />}
                            />
                        </List>
                    </Paper>
                    <div className="versus-wrapper">
                        <h1>VS</h1>
                    </div>
                    <Paper zDepth={1}>
                        <div className="debator-status-header">
                            <h1>Loser!</h1>
                        </div>
                        <CardHeader
                            title="Jack"
                            subtitle={
                                <div>
                                    POSITION:
                                    <span className="debate-position">
                                        NO
                                    </span>
                                </div>
                            }
                            avatar={""}
                        />
                        <List>
                            <ListItem
                                primaryText={
                                    <div>
                                        VOTES -
                                        <span className="result-stat">
                                            6
                                        </span>
                                    </div>
                                }
                                leftIcon={<ContentInbox />}
                            />
                            <ListItem
                                primaryText={
                                    <div>
                                        GOOD POINTS -
                                        <span className="result-stat">
                                            3
                                        </span>
                                    </div>
                                }
                                leftIcon={<ActionStars />}
                            />
                        </List>
                    </Paper>
                </div>
                <div className="debate-response-wrapper">
                    <div className="debate-response-header">
                        <h1>The Audience Said...</h1>
                    </div>
                    <Paper className="audience-responses-wrapper">
                        <Masonry>
                            <div className="response-card-wrapper">
                                <Paper zDepth={2} className="audience-response-card">
                                    <ListItem
                                        primaryText={
                                            <div>
                                                <span className="audience-position">YES</span>
                                                <span className="audience-text">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium</span>
                                            </div>
                                        }
                                        secondaryText={"James Belljam"}
                                        leftIcon={<Avatar />}
                                    />
                                </Paper>
                            </div>
                            <div className="response-card-wrapper">
                            <Paper zDepth={2} className="audience-response-card">
                                <ListItem
                                    primaryText={
                                        <div>
                                            <span className="audience-position">YES</span>
                                            <span className="audience-text">Class aptent taciti sociosqu ad litora torquent per conubtos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium</span>
                                        </div>
                                    }
                                    secondaryText={"Robert Williams"}
                                    leftIcon={<Avatar />}
                                />
                            </Paper>
                            </div>
                            <div className="response-card-wrapper">
                            <Paper zDepth={2} className="audience-response-card">
                                <ListItem
                                    primaryText={
                                        <div>
                                            <span className="audience-position">NO</span>
                                            <span className="audience-text">Class aptent taciti sociosqu ad lra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium</span>
                                        </div>
                                    }
                                    secondaryText={"Jack Killingam"}
                                    leftIcon={<Avatar />}
                                />
                            </Paper>
                            </div>
                            <div className="response-card-wrapper">
                            <Paper zDepth={2} className="audience-response-card">
                                <ListItem
                                    primaryText={
                                        <div>
                                            <span className="audience-position">YES</span>
                                            <span className="audience-text">Class aptent tac pretium</span>
                                        </div>
                                    }
                                    secondaryText={"George Belfont"}
                                    leftIcon={<Avatar />}
                                />
                            </Paper>
                            </div>
                        </Masonry>
                    </Paper>
                </div>
            </Card>
        </Paper>
    </div>
);

export default DebateResults;
