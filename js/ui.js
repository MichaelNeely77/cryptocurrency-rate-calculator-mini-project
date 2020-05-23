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
            console.log(data);
        }) 
    }
}