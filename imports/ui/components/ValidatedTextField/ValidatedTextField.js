import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { blueGrey900, white } from 'material-ui/styles/colors';

const styles = {
    fieldStyle: {
        width: '70%'
    },
    fullWidth: {
        width: '100%'
    },
    errorStyle: {
        color: blueGrey900,
        position: 'absolute',
        bottom: '-0.42rem'
    },
    underlineStyle: {
        borderColor: blueGrey900
    },
    floatingLabelFocusStyle: {
        color: white
    }
};

const ValidatedTextField = ({ label, type, floatingLabel, onChangeAction, rows, fullWidth }) => (
    <TextField
        style={styles.fieldStyle}
        hintText={label}
        floatingLabelText={floatingLabel}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        type={type}
        onChange={(e) => onChangeAction(e)}
        multiLine
        rows={rows}
        fullWidth={fullWidth}
    />
);

ValidatedTextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeAction: PropTypes.func.isRequired
};

export default ValidatedTextField;
