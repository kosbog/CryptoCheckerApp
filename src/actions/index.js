import firebase from "firebase";
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS } from './types';

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
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            dispatch({
                type: 'LOGIN_SUCCESS', payload: user
            })
        })
    }
}