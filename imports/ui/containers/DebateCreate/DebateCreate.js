import React from 'react';
import { RaisedButton, FlatButton, SelectField, MenuItem } from 'material-ui';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { stepForward, stepBackward } from '../../../redux/modules/create';
import './styles.css';

const DebateCreate = ({ dispatch, stepIndex }) => {

    function renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={(step === 3) ? 'Confirm' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    onTouchTap={(step === 3) ? () => handleSubmit() : () => dispatch(stepForward(step))}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
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
        >
            <Stepper
                activeStep={stepIndex}
                linear
                orientation="vertical"
            >
                <Step>
                    <StepLabel>Add Debate Details</StepLabel>
                    <StepContent>
                        <h2>Complete the following debate details:</h2>
                        <div className="debate-details-wrapper">
                            
                        </div>
                        {renderStepActions(0)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Add a Title and Description</StepLabel>
                    <StepContent>
                        <p>Folks need to know what you are sharing. Give them a clue by adding a title and a description.</p>
                        {renderStepActions(1)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Categorize your Item</StepLabel>
                    <StepContent>
                        <p>To share an item, you will add it to our list of categories. You can select multiple categories.</p>
                        <SelectField
                            multiple
                            hintText={'Select Category Tags'}
                        >
                        </SelectField>
                        {renderStepActions(2)}
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Confirm Things</StepLabel>
                    <StepContent>
                        <p>Great! If you are happy with everything, tap the button.</p>
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


