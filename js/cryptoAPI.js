class CryptoAPI { 
    // query the REST API with a currency and a cryptocurrency
    async queryAPI(currency, cryptocurrency) {
        const url = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=12803269db21e2f525533c96c5b79ba4&ids=${cryptocurrency}&interval=1d,30d&convert=${currency}`);

        const result = await url.json();

        return {
            result
        }
    }
    
    // Get all the cryptocurrencies
    async getCryptoCurrencyList() {
        const url = await fetch('https://api.nomics.com/v1/currencies/ticker?key=12803269db21e2f525533c96c5b79ba4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR');

        // Return this as JSON
        const cryptoCurrencies = await url.json();

        // Return the object
        return {
            cryptoCurrencies
        }
    }
}

// Really long API endpoint
// https://api.nomics.com/v1/markets?key=12803269db21e2f525533c96c5b79ba4 


// https://api.nomics.com/v1/currencies/ticker?key=12803269db21e2f525533c96c5b79ba4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR

// https://api.nomics.com/v1/currencies/ticker?key=12803269db21e2f525533c96c5b79ba4&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD

// https://api.nomics.com/v1/currencies/ticker?key=12803269db21e2f525533c96c5b79ba4&ids=BTC,ETH,XRP&interval=1d,30d&convert=GBP