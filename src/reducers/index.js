import {combineReducers} from 'redux';
import CoinsReducer from './CoinsReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer,
    coins: CoinsReducer,
    selection: SelectionReducer
});