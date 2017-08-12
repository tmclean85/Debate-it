import { setValue } from 'neoform-plain-object-helpers';

const STEP_FORWARD = 'STEP_FORWARD';
const STEP_BACKWARD = 'STEP_BACKWARD';
const CAPTURE_FORM_INPUT = 'CAPTURE_FORM_INPUT';
const SET_START_TIME = 'SET_START_TIME';
const SET_END_TIME = 'SET_END_TIME';

const initialState = {
    step: {
        finished: false,
        stepIndex: 0
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

// REDUCERS

function TimeReducer(state, action) {
    switch(action.type) {
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
    default:
        return state;
    }
}

export function DebateCreateReducer(state = initialState, action) {
    switch (action.type) {
    case STEP_FORWARD:
    case STEP_BACKWARD:
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
