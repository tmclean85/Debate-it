import React from 'react';
import { MenuItem, SelectField } from 'material-ui';
import { Field } from 'neoform';
import Moment from 'moment';

const timeValues = ["10 Minutes", "20 Minutes", "30 Minutes", "40 Minutes",
    "50 Minutes", "60 Minutes", "70 Minutes", "80 Minutes", "90 Minutes"];

function convertDurationToEndTime (duration, start) {
    for (let i = 10; i <= 90; i += 10) {
        if (duration === `${i} Minutes`) {
            const end = Moment(start);
            end.add(i, 'm');
            return end.toDate();
        }
    }
}

const TimeDrop = ({ value, onChange, durationValue, data, setDuration }) => (
    <SelectField
        hintText={(!durationValue) ? "Pick a duration..." : durationValue}
        onChange={(event, index, values) => {
            setDuration(event.target.innerText)
            onChange(convertDurationToEndTime(values, data.start))
            }
        }
        hintStyle={(!durationValue) ? null : { color: 'black' }}
    >
        {timeValues.map(time => (
            <MenuItem
                key={time}
                value={time}
                primaryText={time}
            />
        ))}
    </SelectField>
);

export default Field(TimeDrop);
