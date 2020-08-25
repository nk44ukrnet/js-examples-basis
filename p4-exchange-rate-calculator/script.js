const currencyEl_one = document.querySelector('#currency-one'),
    currencyEl_two = document.querySelector('#currency-two'),
    amountEl_one = document.querySelector('#amount-one'),
    amountEl_two = document.querySelector('#amount-two'),
    rateEl = document.querySelector('#rate'),
    swap = document.querySelector('#swap');

//fetch exchange rate and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value,
        currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
        })
        .catch(e => console.log(e));
}

//event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();