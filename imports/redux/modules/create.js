import { setValue } from 'neoform-plain-object-helpers';

const STEP_FORWARD = 'STEP_FORWARD';
const STEP_BACKWARD = 'STEP_BACKWARD';
const CAPTURE_FORM_INPUT = 'CAPTURE_FORM_INPUT';
const SET_START_TIME = 'SET_START_TIME';
const SET_END_TIME = 'SET_END_TIME';
const SET_DURATION = 'SET_DURATION';
const CAPTURE_YES_DEBATOR = 'CAPTURE_YES_DEBATOR';
const CAPTURE_NO_DEBATOR = 'CAPTURE_NO_DEBATOR';

const initialState = {
    step: {
        finished: false,
        stepIndex: 0,
        duration: '',
        debatorYes: '',
        debatorNo: ''
    },
    form: {
        start: '',
        end: ''
    }
};

// ACTION CONSTANTS
export function stepForward(stepIndex) {
    return {
        type: STEP_FORWARD,
        payload: stepIndex
    };
}

export function stepBackward(stepIndex) {
    return {
        type: STEP_BACKWARD,
        payload: stepIndex
    };
}

export function captureFormInput(name, value) {
    return {
        type: CAPTURE_FORM_INPUT,
        payload: { name, value }
    }
}

export function setStartTime(start) {
    return {
        type: SET_START_TIME,
        payload: start
    }
}

export function setEndTime(end) {
    return {
        type: SET_END_TIME,
        payload: end
    }
}

export function setDuration(duration) {
    return {
        type: SET_DURATION,
        payload: duration
    }
}

export function captureYesDebator(name) {
    return {
        type: CAPTURE_YES_DEBATOR,
        payload: name
    }
}

export function captureNoDebator(name) {
    return {
        type: CAPTURE_NO_DEBATOR,
        payload: name
    }
}

// REDUCERS

function TimeReducer(state, action) {
    switch (action.type) {
        case SET_START_TIME:
            return {
                ...state,
                start: action.payload
            };
        case SET_END_TIME:
            return {
                ...state,
                end: action.payload
            };
        default:
            return state;
    }
}

function StepReducer(state, action) {
    switch (action.type) {
        case STEP_FORWARD:
            return {
                ...state,
                stepIndex: action.payload + 1
            };
        case STEP_BACKWARD:
            return {
                ...state,
                stepIndex: action.payload - 1
            };
        case SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case CAPTURE_YES_DEBATOR:
            return {
                ...state,
                debatorYes: action.payload
            }
        case CAPTURE_NO_DEBATOR:
            return {
                ...state,
                debatorNo: action.payload
            }
        default:
            return state;
    }
}

export function DebateCreateReducer(state = initialState, action) {
    switch (action.type) {
        case STEP_FORWARD:
        case STEP_BACKWARD:
        case SET_DURATION:
        case CAPTURE_YES_DEBATOR:
        case CAPTURE_NO_DEBATOR:
            return {
                ...state,
                step: StepReducer(state.step, action)
            };
        case CAPTURE_FORM_INPUT:
            const form = setValue(state, action.payload.name, action.payload.value);
            return {
                ...state,
                ...form
            };
        case SET_START_TIME:
        case SET_END_TIME:
            return {
                ...state,
                form: TimeReducer(state.form, action)
            }
        default:
            return state;
    }
}
