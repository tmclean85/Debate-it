import React from 'react';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Form } from 'neoform';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Attendees from '../../components/Attendees';
import RadioButtonInput from '../DebateCreate/FormComponents/RadioButton';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionStars from 'material-ui/svg-icons/action/stars';

import './styles.css';
// {users.map(user =>
//                 (<Attendees
//                     userData={user}
//                     key={user._id}
//                 />)
//             )}



const DebateInterface = ({ users, debate, onSubmit }) => (
    <div className="interface-wrapper">
        <Paper zDepth={2} className="interface-card">
            <div className="current-debate-header">
                <h1>Current Debate</h1>
            </div>
                <CardTitle
                    subtitle="Currently up for debate"
                    title={`Should Scientists Mix Animal Cells with Human Cells?`}
                    className="current-debate-question"
                />
            <div className="current-debate-status-wrapper">
                    <Paper zDepth={1}>
                        <div className="current-debator-status-header">
                            <h1>YES</h1>
                        </div>
                        <CardHeader
                            title="James Logane"
                            subtitle={
                                <div>
                                    GOOD POINTS:
                                    <span className="good-points-made">
                                        7
                                    </span>
                                </div>
                            }
                            avatar={""}
                        />
                    </Paper>
                    <div className="current-versus-wrapper">
                        <h1>VS</h1>
                    </div>
                    <Paper zDepth={1}>
                        <div className="current-debator-status-header">
                            <h1>NO</h1>
                        </div>
                        <CardHeader
                            title="Jack Jimcraig"
                            subtitle={
                                <div>
                                    GOOD POINTS:
                                    <span className="good-points-made">
                                        4
                                    </span>
                                </div>
                            }
                            avatar={""}
                        />
                    </Paper>
                </div>
                <br />
            <div className="vote-wrapper">
                <div className="vote-header">
                    <h1>Cast Your Vote!</h1>
                </div>
                <div className="vote-actions">
                    <RadioButtonInput
                        name="userVote"
                        className="vote-radio"
                    />
                    <Paper zDepth={2} className="vote-reason-wrapper">
                        <div className="vote-reason-header">
                            <h2>Please Include a Reason Before Voting</h2>
                        </div>
                        <TextInput
                            name="because"
                            rows={2}
                            className="vote-reason-input"
                        />
                    </Paper>
                    <div>
                        <RaisedButton
                            label="Confirm Vote"
                            onTouchTap={() => onSubmit()}
                            className="vote-button"
                            secondary
                        />
                    </div>
                </div>
            </div>
        </Paper>
    </div>
);

export default Form(DebateInterface);
