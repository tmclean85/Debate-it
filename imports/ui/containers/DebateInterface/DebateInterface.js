import React from 'react';
import Gravatar from 'react-gravatar';
import { Form } from 'neoform';
import Paper from 'material-ui/Paper';
import { CardHeader, CardTitle } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import RadioButtonInput from '../DebateCreate/FormComponents/RadioButton';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import './styles.css';

const DebateInterface = ({ debate, onSubmit, modalOpen, handleClose }) => (
    <div className="interface-wrapper">
        <Paper zDepth={2} className="interface-card">
            <div className="current-debate-header">
                <h1>Current Debate</h1>
            </div>
            <CardTitle
                subtitle="Currently up for debate"
                title={`${debate.question}?`}
                className="current-debate-question"
            />
            <div className="current-debate-status-wrapper">
                <Paper zDepth={1}>
                    <div className="current-debator-status-header">
                        <h1>YES</h1>
                    </div>
                    <CardHeader
                        title={debate.yesUser.name}
                        subtitle={
                            <div>
                                <span className="debator-argument-text">
                                    Argument
                                    </span>
                                {debate.yesBecause}
                            </div>
                        }
                        avatar={<Gravatar email={debate.yesUser.email} />}
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
                        title={debate.noUser.name}
                        subtitle={
                            <div>
                                <span className="debator-argument-text">
                                    Argument
                </span>
                                {debate.noBecause}
                            </div>
                        }
                        avatar={<Gravatar email={debate.noUser.email} />}
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
                        <Dialog
                            title="Vote Confirmation"
                            actions={
                                <FlatButton
                                    label="Okay!"
                                    primary
                                    keyboardFocused
                                    onTouchTap={() => handleClose(false)}
                                />}
                            modal={false}
                            open={modalOpen}
                            onRequestClose={() => handleClose(false)}
                        >
                            Thanks for voting! Just know that your vote isn't final so if the opponent happens to be particularly compelling you can change it!
                        </Dialog>
                    </div>
                </div>
            </div>
        </Paper>
    </div>
);

export default Form(DebateInterface);
