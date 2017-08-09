import React from 'react';
import Moment from 'moment';

import DropDownMenu from 'material-ui/DropDownMenu';
import { RaisedButton, FlatButton, SelectField, MenuItem } from 'material-ui';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ValidatedTextField from '../../components/ValidatedTextField';
import { stepForward, stepBackward } from '../../../redux/modules/create';
import './styles.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    fontSize: 14
  }
};

const DebateCreate = ({ dispatch, stepIndex, userData }) => {

    const timeValues = ["10 Minutes", "20 Minutes", "30 Minutes", "40 Minutes", 
    "50 Minutes",  "60 Minutes",  "70 Minutes",  "80 Minutes",  "90 Minutes"];


    function renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={(step === 3) ? 'Confirm' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    secondary
                    onTouchTap={(step === 3) ? () => handleSubmit() : () => dispatch(stepForward(step))}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <RaisedButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple
                        disableFocusRipple
                        onTouchTap={() => dispatch(stepBackward(step))}
                    />
                )}
            </div>
        );
    }


    return (
        <div
            style={{ maxWidth: 800, maxHeight: 500, margin: 'auto' }}
            className="stepForm-wrapper"
        >
            <Stepper
                activeStep={stepIndex}
                linear
                orientation="vertical"
            >
                <Step>
                    <StepLabel>Add Debate Details</StepLabel>
                    <StepContent>
                        <div className="debate-details-wrapper">
                            <div className="details">
                            <h2>Question</h2>
                            <ValidatedTextField
                                label="Question"
                                type="input"
                                fullWidth={false}
                            />
                            </div>
                            <div className="details">
                                <h2>Location</h2>
                            <ValidatedTextField
                                label="Location"
                                type="input"
                                fullWidth={false}
                            />
                            </div>
                            <div className="details">
                            <h2>Start time</h2>
                                <TextField
                                    disabled
                                    hintText={Moment().format("h:mm a")}
                                />
                            </div>
                            <div className="details">
                                <h2>Duration</h2>
                                <DropDownMenu
                                    value="10 Minutes"
                                >
                                    {timeValues.map(time => (
                                        <MenuItem 
                                            key={time}
                                            insetChildren
                                            value={time}
                                            primaryText={time}
                                        />
                                    ))}
                                </DropDownMenu>
                            </div>
                        </div>
                        {renderStepActions(0)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Who's Taking Part?</StepLabel>
                    <StepContent>
                        <div className="debate-debators-wrapper">
                            <div className="argument-choice">
                                <h2>Which Side Are You Taking?</h2>
                                <RadioButtonGroup name="chooseChoose" defaultSelected="Yes">
                                    <RadioButton
                                        value="Yes"
                                        label="I Agree!"
                                        style={styles.radioButton}
                                    />
                                    <RadioButton
                                        value="No"
                                        label="I Disagree!"
                                        style={styles.radioButton}
                                    />
                                    </RadioButtonGroup>
                            </div>
                            <div className="argument-choice">
                                <h2>Who is Your Opponent?</h2>
                                <SelectField
                                    hintText={'Select Opponent'}
                                >
                                    {userData.map(user => (
                                        <MenuItem
                                            key={user._id}
                                            insetChildren
                                            value={user}
                                            primaryText={user.name}
                                        />
                                    ))}
                                </SelectField>
                            </div>
                        </div>
                        {renderStepActions(1)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>What's Your Reasoning?</StepLabel>
                    <StepContent>
                        <div className="debate-reasoning-wrapper">
                            <div>
                                <h2>Agreer's Argument...</h2>
                                <div className="text-input-wrapper">
                                    <ValidatedTextField
                                        type="input"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2>Disagreer's Argument...</h2>
                                <div className="text-input-wrapper">
                                    <ValidatedTextField
                                        type="input"
                                        rows={3}
                                    />
                                </div>
                            </div>
                        </div>
                        {renderStepActions(2)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Confirm Things</StepLabel>
                    <StepContent>
                        <h3>Great! If you are happy with everything, tap the button.</h3>
                        {renderStepActions(3)}
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        stepIndex: state.create.step.stepIndex
    };
}

export default connect(mapStateToProps)(DebateCreate);


