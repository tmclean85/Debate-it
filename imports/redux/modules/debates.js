const CHANGE_TAB = 'CHANGE_TAB';

const initialState = {
    tabValue: 'a'
};

export function changeTab(value) {
    return {
        type: CHANGE_TAB,
        payload: value
    };
}

export function DebateReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_TAB:
        return {
            ...state,
            tabValue: action.payload
        };
    default:
        return state;
    }
}


