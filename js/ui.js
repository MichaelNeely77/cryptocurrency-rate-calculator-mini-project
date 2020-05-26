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

    // Print a message 2 parameters, message and classes
    printMessage(message, className) {
        const div = document.createElement('div');

        div.className = className;
        // Add the message
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000)
    }

    displayResult(result) {
        
        let HTMLTemplate = '';
        // const cPrice = (result.price).toFixed(2);

        // console.log(cPrice);
        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result.name} from ${currency.value} is ${result.price}</p>
                </div>
            </div>
        `;
        console.log(result.price);
        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;
    }
}