import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { DebateReducer } from './modules/debates';
import { DebateCreateReducer } from './modules/create';
import { NewUserReducer } from './modules/register';
import { VoteReducer } from './modules/vote';
import { LogInReducer } from './modules/login';
import { UpdateUserReducer } from './modules/updateProfile';


export default combineReducers({
    debates: DebateReducer,
    create: DebateCreateReducer,
    register: NewUserReducer,
    vote: VoteReducer,
    login: LogInReducer,
    updateProfile:  UpdateUserReducer
});
