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

        var price1 = exchange1.USD;
        var price2 = exchange2.last_trade_price;

        setPrices(price1, price2);

    } catch (error) {
        console.log(error);
    }

}

function setPrices(price1, price2) {
    var header1 = document.getElementById("price1");
    var header2 = document.getElementById("price2");

    header1.innerHTML = price1;
    header2.innerHTML = price2;

    var arrow = document.getElementById("arrow");


    if (price1 > price2) {
        arrow.innerHTML = "-->";
    } else if (price2 > price1) {
        arrow.innerHTML = "<--";
    } else {
        arrow.innerHTML = "==";
    }

}
fetchPrices(urls);
// var interval = 5000
// setInterval(() => {
//     fetchPrices(urls);
// }, interval);