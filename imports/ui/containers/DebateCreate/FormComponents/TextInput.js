import React from 'react';
import { Field } from 'neoform';
import TextField from 'material-ui/TextField';

const TextInput = ({
    autoComplete,
    type,
    defaultValue,
    className,
    floatingLabelText,
    value,
    onChange,
    rows,
    disabled,
    hintText,
    name
    }) => (
        <TextField
            autoComplete={autoComplete}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            disabled={disabled}
            hintText={hintText}
            floatingLabelText={floatingLabelText}
            className={className}
            defaultValue={defaultValue}
            name={name}
        />
  );

export default Field(TextInput);
