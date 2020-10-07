// api Url
const api = 'https://api.exchangeratesapi.io/';
const api2 = 'https://testapi.io/api/oguzhanzny/currencies.api';
//elements

const el_currency_one = document.querySelector('#currency_one');
const el_currency_two = document.querySelector('#currency_two');
const el_amount = document.querySelector('#amount');
const el_btn_calculate = document.querySelector('#btn_calculate');
const el_result = document.querySelector('#result');

// load symbols
fetch('https://testapi.io/api/oguzhanzny/currencies.api')
  .then((res) => res.json())
  .then((data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    let options;

    for (let i = 0; i < keys.length; i++) {
      options += `<option value=${keys[i]}>${values[i]}</option>`;
    }

    el_currency_one.innerHTML += options;
    el_currency_two.innerHTML += options;
  });

el_btn_calculate.addEventListener('click', function () {
  const base_currency = el_currency_one.value;
  const to = el_currency_two.value;
  const amount = el_amount.value;
  console.log(base_currency, to);

  fetch(`${api}latest?base=${base_currency}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[to];
      el_result.innerHTML = `${amount} ${base_currency} = ${amount * rate}`;
    });
});
