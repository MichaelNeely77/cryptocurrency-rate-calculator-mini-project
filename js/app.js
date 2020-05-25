// Instantiate the classses

const cryptoAPI = new CryptoAPI();
const ui = new UI();


const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

        // read currency
        const currencySelect = document.getElementById('currency').value;

        // read cryptocurrency
        const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

        // console.log(currencySelect + ': ' +cryptoCurrencySelect);
        if(currencySelect === '' || cryptoCurrencySelect === '') {
            ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
            console.log('error');
        } else {
           cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0]);
            })
        }
});