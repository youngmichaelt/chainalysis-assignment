let crypto = "BTC";

function whichCrypto(option) {
    if (option == 1) {
        crypto = "ETH";
        var button = document.getElementById("switch").setAttribute("onClick", "javascript: whichCrypto(2);");
        var header = document.getElementsByClassName("page-header")[0]
        header.innerHTML = "Ethereum Buy Recommendation"
    } else {
        crypto = "BTC";
        var button = document.getElementById("switch").setAttribute("onClick", "javascript: whichCrypto(1);");
        var header = document.getElementsByClassName("page-header")[0]
        header.innerHTML = "Bitcoin Buy Recommendation"
    }
    fetchPrices(crypto);
    return crypto;
}

async function fetchBitcoinPrice(url) {
    try {
        let res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


async function fetchPrices(crypto) {
    urls = ["https://min-api.cryptocompare.com/data/price?fsym=" + crypto + "&tsyms=USD", "https://api.blockchain.com/v3/exchange/tickers/" + crypto + "-USD"]

    try {
        console.log(urls[0])
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
// fetchPrices(crypto);
var interval = 5000
setInterval(() => {
    fetchPrices(crypto);
}, interval);