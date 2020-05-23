class CryptoAPI {
    
    // Get all the cryptocurrencies
    async getCryptoCurrencyList() {
        const url = await fetch('https://api.nomics.com/v1/markets?key=12803269db21e2f525533c96c5b79ba4');

        // Return this as JSON
        const cryptoCurrencies = await url.json();

        // Return the object
        return {
            cryptoCurrencies
        }
    }
}