import { EMAIL_CHANGED } from './types';

export const selectCoin = (coinSymbol) => {
    return { type: 'SELECT_COINS', payload: coinSymbol }
}

export const emailChanged = (text) => {
    return { type: EMAIL_CHANGED, payload: text }
}