import { combineReducers } from 'redux';
import OptionReducer from './reducer-options';
import ActiveUserReducer from './reducer-active';

const allred = combineReducers({
    users: OptionReducer,
    activeUser: ActiveUserReducer

});

export default allred;