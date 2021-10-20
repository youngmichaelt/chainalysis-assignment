async function fetchBitcoinPrice(url) {
    try {
        let res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

urls = ["https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR", "https://api.blockchain.com/v3/exchange/tickers/BTC-USD"]

async function fetchPrices(urls) {
    try {
        var exchange1 = await fetchBitcoinPrice(urls[0])
        console.log(exchange1);

        var exchange2 = await fetchBitcoinPrice(urls[1])
        console.log(exchange2);

    } catch (error) {
        console.log(error);
    }

}
fetchPrices(urls);

module.exports = fetchBitcoinPrice;