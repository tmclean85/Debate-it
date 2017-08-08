import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { DebateReducer } from './modules/debates';


export default combineReducers({
    debates: DebateReducer
});
