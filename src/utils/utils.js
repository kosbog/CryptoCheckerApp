import axios from 'axios';
import CONST from '../CONSTANTS';

const API = {
    getCoinsList: (currency) => {
        let temp = validCurrency(currency);
        return axios.get(`https://api.coinmarketcap.com/v1/ticker/?convert=${temp}`);
    }
}

const validCurrency = (value) => {
    return CONST._CURRENCY.map((item, i) => {
        if (value === item) {
            return item;
        } else {
            return 'EUR'
        }
    });
}

export default API;