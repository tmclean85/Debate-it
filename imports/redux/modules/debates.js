const CHANGE_TAB = 'CHANGE_TAB';
const MAP_DEBATE_INFO = 'MAP_DEBATE_INFO';
const IS_LOADING = 'IS_LOADING';

const initialState = {
    tabValue: 'a',
    debateInfo: {},
    loading: true
};

export function changeTab(value) {
    return {
        type: CHANGE_TAB,
        payload: value
    };
}

export function mapDebateInfoToState(data) {
    return {
        type: MAP_DEBATE_INFO,
        payload: data
    }
}

export function loading(loadingState) {
    return {
        type: IS_LOADING,
        payload: loadingState
    }
}

export function DebateReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_TAB:
        return {
            ...state,
            tabValue: action.payload
        };
    case MAP_DEBATE_INFO: 
        return {
            ...state,
            debateInfo: action.payload
        }   
    case IS_LOADING: 
        return {
            ...state,
            loading: action.payload
        }
    default:
        return state;
    }
}


