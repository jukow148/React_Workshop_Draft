function getBitcoinData(curr) {
const link = `https://api.cryptonator.com/api/full/btc-${curr}`;
    console.log(link);
    return fetch(link)
        .then(resp => resp.json())
}

function getCurrencyData(curr) {
const link = `https://api.cryptonator.com/api/full/${curr}-usd`;
    console.log(link);
    return fetch(link)
        .then(resp => resp.json())
}

export default {getBitcoinData, getCurrencyData};
