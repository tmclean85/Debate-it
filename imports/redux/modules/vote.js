import { setValue } from 'neoform-plain-object-helpers';

const CAPTURE_USER_VOTE = 'CAPTURE_USER_VOTE';
const MODAL_TOGGLE = 'MODAL_TOGGLE';

const initialState = {
    modalOpen: false
};

// ACTION CONSTANTS
export function captureUserVote(name, value) {
    return {
        type: CAPTURE_USER_VOTE,
        payload: { name, value }
    };
}

export function modalToggle(value) {
    return {
        type: MODAL_TOGGLE,
        payload: value
    };
}

// REDUCERS
export function VoteReducer(state = initialState, action) {
    switch (action.type) {
    case CAPTURE_USER_VOTE:
        const vote = setValue(state, action.payload.name, action.payload.value);
        return {
            ...state,
            ...vote
        };
    case MODAL_TOGGLE:
        return {
            ...state,
            modalOpen: action.payload
        };
    default:
        return state;
    }
}
