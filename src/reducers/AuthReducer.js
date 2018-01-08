import API from '../utils/utils';
import { EMAIL_CHANGED } from '../actions/types';

const initialState = {
    email: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log(`*** action ${EMAIL_CHANGED} run ***`);
            return { ...state, email: action.payload }
            break;

        default:
            return state;
            break;
    }
};