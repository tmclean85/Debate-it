import { setValue } from 'neoform-plain-object-helpers';

const CAPTURE_USER_VOTE = 'CAPTURE_USER_VOTE';

const initialState = {

};

// ACTION CONSTANTS
export function captureUserVote(name, value) {
    return {
        type: CAPTURE_USER_VOTE,
        payload: { name, value }
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
        default:
            return state;
    }
}