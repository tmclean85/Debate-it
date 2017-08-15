import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { Form } from 'neoform';
import { RaisedButton, TextField } from 'material-ui';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent
} from 'material-ui/Stepper';
import PropTypes from 'prop-types';

import TextInput from './FormComponents/TextInput';
import TimeDrop from './FormComponents/TimeDrop';
import SelectDebators from './FormComponents/SelectDebators';
import { stepForward, stepBackward } from '../../../redux/modules/create';
import './styles.css';

const DebateCreate = ({
    dispatch,
    stepData,
    stepIndex,
    userData,
    onSubmit,
    data,
    captureYesDebator,
    captureNoDebator,
    setDuration
}) => {
    function renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={(step === 3) ? 'Confirm' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    secondary
                    onTouchTap={(step === 3) ? () => onSubmit() : () => dispatch(stepForward(step))}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <RaisedButton
                        label={'Back'}
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
            className={'stepForm-wrapper'}
        >
            <form>
                <Stepper
                    activeStep={stepIndex}
                    linear
                    orientation={'vertical'}
                >
                    <Step>
                        <StepLabel>Add Debate Details</StepLabel>
                        <StepContent>
                            <div className={'debate-details-wrapper'}>
                                <div className={'details'}>
                                    <h2>Question</h2>
                                    <TextInput name={'form.question'} />
                                </div>
                                <div className={'details'}>
                                    <h2>Location</h2>
                                    <TextInput name={'form.location'} />
                                </div>
                                <div className={'details'}>
                                    <h2>Start time</h2>
                                    <TextField
                                        disabled
                                        hintText={Moment().format('h:mm a')}
                                    />
                                </div>
                                <div className={'details'}>
                                    <h2>Duration</h2>
                                    <TimeDrop
                                        name={'form.end'}
                                        durationValue={stepData.duration}
                                        data={data}
                                        setDuration={setDuration}
                                    />
                                </div>
                            </div>
                            {renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Who is Taking Part?</StepLabel>
                        <StepContent>
                            <div className={'debate-debators-wrapper'}>
                                <div className={'argument-choice'}>
                                    <h2>Who is Arguing for Yes?</h2>
                                    <SelectDebators
                                        name={'form.yesUser_id'}
                                        userData={userData}
                                        captureDebatorName={captureYesDebator}
                                        debatorName={stepData.debatorYes}
                                    />
                                </div>
                                <div className={'argument-choice'}>
                                    <h2>Who is Arguing For No?</h2>
                                    <SelectDebators
                                        name={'form.noUser_id'}
                                        userData={userData}
                                        captureDebatorName={captureNoDebator}
                                        debatorName={stepData.debatorNo}
                                    />
                                </div>
                            </div>
                            {renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>What is Your Reasoning?</StepLabel>
                        <StepContent>
                            <div className={'debate-reasoning-wrapper'}>
                                <div>
                                    <h2>Agreer&apos;s Argument...</h2>
                                    <div className={'text-input-wrapper'}>
                                        <TextInput
                                            name={'form.yesBecause'}
                                            rows={2}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2>Disagreer&apos;s Argument...</h2>
                                    <div className={'text-input-wrapper'}>
                                        <TextInput
                                            name={'form.noBecause'}
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
        stepIndex: state.create.step.stepIndex,
        stepData: state.create.step
    };
}

export default connect(mapStateToProps)(Form(DebateCreate));

DebateCreate.defaultProps = {
    data: PropTypes.shape({
        start: PropTypes.instanceOf(Date)
    }),
    userData: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.instanceOf(Date),
        services: PropTypes.shape({
            resume: PropTypes.shape({
                loginTokens: PropTypes.arrayOf(PropTypes.shape({
                    hashedToken: PropTypes.string,
                    when: PropTypes.instanceOf(Date)
                }))
            })
        })
    }))
};

DebateCreate.propTypes = {
    dispatch: PropTypes.func.isRequired,
    stepData: PropTypes.shape({
        debatorNo: PropTypes.string.isRequired,
        debatorYes: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        finished: PropTypes.bool.isRequired,
        stepIndex: PropTypes.number.isRequired,
    }).isRequired,
    stepIndex: PropTypes.number.isRequired,
    userData: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.instanceOf(Date),
        emails: PropTypes.arrayOf(PropTypes.shape({
            address: PropTypes.string.isRequired,
            verified: PropTypes.bool.isRequired
        })).isRequired,
        profile: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            wins: PropTypes.number,
            losses: PropTypes.number
        }).isRequired,
        services: PropTypes.shape({
            password: PropTypes.objectOf(PropTypes.string.isRequired),
            resume: PropTypes.shape({
                loginTokens: PropTypes.arrayOf(PropTypes.shape({
                    hashedToken: PropTypes.string,
                    when: PropTypes.instanceOf(Date)
                }))
            })
        }),
        _id: PropTypes.string.isRequired
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.shape({
        start: PropTypes.instanceOf(Date),
        end: PropTypes.string
    }).isRequired,
    captureYesDebator: PropTypes.func.isRequired,
    captureNoDebator: PropTypes.func.isRequired,
    setDuration: PropTypes.func.isRequired
};
