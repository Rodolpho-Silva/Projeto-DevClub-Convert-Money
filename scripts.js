const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const convertValues = async () => {
  const inputReals = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  console.log(data);

  const dollar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realValueText.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputReals);

if(select.value === "US$ Dólar Americano") {
  currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputReals / dollar);
}
if(select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
  }).format(inputReals / euro);
};
if(select.value === "Bitcoin") {
  currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
}).format(inputReals / bitcoin);
};
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currentFlag = document.getElementById('current-flag')
    if(select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currentFlag.src = "./images/euro.png"
    }
    if(select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currentFlag.src = "./images/estados-unidos.png"
    }
    if(select.value === 'Bitcoin') {
      currencyName.innerHTML = "Bitcoin"
      currentFlag.src = "./images/bitcoin.png"
  }
    convertValues ()
}

button.addEventListener("click", convertValues);
select.addEventListener('change', changeCurrency);