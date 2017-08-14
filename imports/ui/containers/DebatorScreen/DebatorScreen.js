import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
import Avatar from 'material-ui/Avatar';
import Masonry from 'react-masonry-component';

import { List, ListItem } from 'material-ui/List';
import './styles';

const debatorScreen = () => (
    <div className="debate-results-wrapper">
        <Paper zDepth={2}>
            <div className="debate-results-header">
                <h1>Current Debate</h1>
            </div>
            <Card>
                <CardTitle
                    subtitle="Currently up for debate"
                    title={`Should Scientists Mix Animal Cells with Human Cells?`}
                    className="debate-results-question"
                />
                <h1>Your Argument...</h1>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.
                </CardText>
                <div className="debate-response-wrapper">
                    <div className="debate-response-header">
                        <h1>Check-In Attendees</h1>
                    </div>
                    <div className="to-check-in-header">
                                <h2>Attendees To Check-In</h2>
                    </div>
                    <Paper className="audience-responses-wrapper">
                        <div>
                            <Masonry>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                            rightIcon={<Checkbox />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                            rightIcon={<Checkbox />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                            rightIcon={<Checkbox />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                            rightIcon={<Checkbox />}
                                        />
                                    </Paper>
                                </div>
                            </Masonry>
                        </div>
                        </Paper>
                        <div className="to-check-in-header">
                             <h2>Current Attendees</h2>
                        </div>
                        <Paper>
                        <div>
                            <Masonry>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                        />
                                    </Paper>
                                </div>
                                <div className="response-card-wrapper">
                                    <Paper zDepth={2} className="audience-response-card">
                                        <ListItem
                                            primaryText="James Belljam"
                                            leftIcon={<Avatar />}
                                        />
                                    </Paper>
                                </div>
                            </Masonry>
                        </div>
                    </Paper>
                </div>
            </Card>
        </Paper>
    </div>
);

export default debatorScreen;
