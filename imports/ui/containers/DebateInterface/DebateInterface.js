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

// {users.map(user =>
//                 (<Attendees
//                     userData={user}
//                     key={user._id}
//                 />)
//             )}



const DebateInterface = ({ users, debate, onSubmit }) => (
    <div className="interface-wrapper">
        <Paper zDepth={2} className="interface-card">
            <div className="vote-wrapper">
                <div className="vote-header">
                    <h1>Cast Your Vote!</h1>
                </div>
                <div className="vote-actions">
                <RadioButtonInput
                    name="userVote"
                    className="vote-radio"
                />
                <div>
                <RaisedButton
                    label="Confirm Vote"
                    onTouchTap={() => onSubmit()}
                    className="vote-button"
                    secondary
                /></div>
                </div>
            </div>
        </Paper>
    </div>
);

export default Form(DebateInterface);

{/* <div className="debate-interface-wrapper">
        <div className="debate-interface-header">
            <h1 className="interface-title">{`${debate.question}?`}</h1>
            
            
        </div>

        <div className="interface-attendees-box">

        </div>
        <div className="debate-meta">
            <div className="debate-meta-yes">
                <h1 className="vote-bold">Votes Yes:</h1>
                <p>11</p>
                <div className="good-point-yes">
                    <Avatar size={60} src="" />
                    <RaisedButton
                        buttonStyle={{
                            height: '3.75rem',
                            width: '8rem'
                        }}
                        label="Good Point!"
                    />
                </div>
            </div>
            <div className="debate-meta-no">
                <h1 className="vote-bold">Votes No:</h1>
                <p>14</p>
                <div className="good-point-no">
                    <RaisedButton
                        buttonStyle={{
                            height: '3.75rem',
                            width: '8rem'
                        }}
                        label="Good Point!"
                    />
                    <Avatar size={60} src="" />
                </div>
            </div>
        </div>
    </div> */}