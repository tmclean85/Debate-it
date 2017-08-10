import React from 'react';
import { Field } from 'neoform';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radioButton: {
        marginBottom: 16,
        fontSize: 14
    }
};

const RadioButtonInput = ({ value, onChange }) => (
    <RadioButtonGroup
        onChange={(e) => onChange(e.target.value)}
    >
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
);

export default Field(RadioButtonInput);