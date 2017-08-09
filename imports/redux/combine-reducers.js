import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { DebateReducer } from './modules/debates';
import { DebateCreateReducer } from './modules/create';


export default combineReducers({
    debates: DebateReducer,
    create: DebateCreateReducer
});
