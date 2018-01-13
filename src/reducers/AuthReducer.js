import API from '../utils/utils';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_IN_ACTION } from '../actions/types';

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log(`*** action ${EMAIL_CHANGED} run ***`);
            return { ...state, email: action.payload }
            break;

        case PASSWORD_CHANGED:
            console.log(`*** action ${PASSWORD_CHANGED} run ***`);
            return { ...state, password: action.payload }
            break;

        case LOGIN_SUCCESS:
            console.log(`*** action ${LOGIN_SUCCESS} run ***`);
            return { ...state, ...initialState, user: action.payload, error: '' }
            break;

        case LOGIN_FAIL:
            console.log(`*** action ${LOGIN_FAIL} run ***`);
            return { ...state, error: 'Auth fail', password: '', loading: false }
            break;

        case LOGIN_IN_ACTION:
            console.log(`*** action ${LOGIN_IN_ACTION} run ***`);
            return { ...state, loading: true, error: '' }
            break;

        default:
            return state;
            break;
    }
};