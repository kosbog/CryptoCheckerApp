import firebase from "firebase";
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_IN_ACTION } from './types';

export const selectCoin = (coinSymbol) => {
    return { type: 'SELECT_COINS', payload: coinSymbol }
}

export const emailChanged = (text) => {
    return { type: EMAIL_CHANGED, payload: text }
}

export const passwordChanged = (text) => {
    return { type: PASSWORD_CHANGED, payload: text }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_IN_ACTION });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            .catch((error) => {
                if (error) { alert(`Problem in login action:\n\n***\n${error}\n\n***`) };

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginSuccess(dispatch, user))
                    .catch(() => loginFail(dispatch))
            });
    }
}

const loginFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
}

const loginSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });
}