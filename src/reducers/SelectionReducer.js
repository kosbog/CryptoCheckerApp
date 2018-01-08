import API from '../utils/utils';

export default (state = null, action)=> {
    switch (action.type) {
        case 'SELECT_COINS':
            return action.payload;
            break;
    
        default:
            return state;
            break;
    }
};