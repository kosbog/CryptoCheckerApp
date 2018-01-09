import API from '../utils/utils';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const initialState = {
    email: '',
    password: ''
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log(`*** action ${EMAIL_CHANGED} run ***`);
            return { ...state, email: action.payload }
            break;

        case PASSWORD_CHANGED:
            console.log(`*** action ${EMAIL_CHANGED} run ***`);
            return { ...state, password: action.payload }
            break;

        default:
            return state;
            break;
    }
};