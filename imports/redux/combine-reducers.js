import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { DebateReducer } from './modules/debates';
import { DebateCreateReducer } from './modules/create';
import { NewUserReducer } from './modules/register';


export default combineReducers({
    debates: DebateReducer,
    create: DebateCreateReducer,
    register: NewUserReducer
});
