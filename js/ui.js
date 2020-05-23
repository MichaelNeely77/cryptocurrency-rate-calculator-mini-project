class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
    }

    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrencyList()
        .then(data => {
            const cryptoCurrencies = data.cryptoCurrencies;

            // Build the <select> feature from the REST API
            const select = document.getElementById('cryptocurrency');

            cryptoCurrencies.forEach(currency => {
                // add the options
                const option = document.createElement('option');
                option.value = currency.id;
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);
            })

        }) 
    }
}