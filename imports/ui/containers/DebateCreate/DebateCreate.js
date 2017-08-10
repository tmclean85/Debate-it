import React from 'react';
import Moment from 'moment';
import { Form } from 'neoform';

import { RaisedButton, FlatButton, SelectField, MenuItem } from 'material-ui';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RadioButtonInput from './FormComponents/RadioButton';
import TextInput from './FormComponents/TextInput';
import SelectMenu from './FormComponents/DropMenu';
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

{/* <DropDownMenu
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
</DropDownMenu> */}

const timeValues = ["10 Minutes", "20 Minutes", "30 Minutes", "40 Minutes",
        "50 Minutes", "60 Minutes", "70 Minutes", "80 Minutes", "90 Minutes"];

const DebateCreate = ({ dispatch, stepIndex, userData, convertDuration }) => {

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
            <form>
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
                                    <TextInput name="form.question" />
                                </div>
                                <div className="details">
                                    <h2>Location</h2>
                                    <TextInput name="form.location" />
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
                                    <SelectField
                                        value="10 Minutes"
                                        onChange={(event, index, values) => convertDuration(values)}
                                    >
                                        {timeValues.map(time => (
                                            <MenuItem
                                                key={time}
                                                value={time}
                                                primaryText={time}
                                            />
                                        ))}
                                    </SelectField>
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
                                    <RadioButtonInput name="form.side" />
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
                                        <TextInput
                                            name="form.yesBecause"
                                            rows={2}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2>Disagreer's Argument...</h2>
                                    <div className="text-input-wrapper">
                                        <TextInput
                                            name="form.noBecause"
                                            rows={2}
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
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        stepIndex: state.create.step.stepIndex
    };
}

export default connect(mapStateToProps)(Form(DebateCreate));


