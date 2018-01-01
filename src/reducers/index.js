import {combineReducers} from 'redux';
import CoinsReducer from './CoinsReducer';

export default combineReducers({
    coins: CoinsReducer
});