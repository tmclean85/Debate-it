// redux form should create the reducer automatically
const STEP_FORWARD = 'STEP_FORWARD';
const STEP_BACKWARD = 'STEP_BACKWARD';

const initialState = {
    step: {
        finished: false,
        stepIndex: 0
    }
    // form: {
    //     imageurl: '',
    //     title: '',
    //     description: '',
    //     tags: []
    // }
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

// REDUCERS

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

function FormReducer(state = initialState, action) {
    switch (action.type) {
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
        
        return {
            ...state,
            form: FormReducer(state.form, action)
        };
    default:
        return state;
    }
}
