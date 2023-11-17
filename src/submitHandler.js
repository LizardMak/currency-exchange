import ExchangeRates from "./getExchangeRate";

window.addEventListener("load", function () {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

async function handleSubmit() {
  event.preventDefault();
  let USDAmount = document.getElementById("amountUSD").value;
  let exchangeTo = document.querySelector('input[name="currency"]:checked').id;
  let exchangeRateObject = await ExchangeRates.getExchangeRate(exchangeTo);
  let exchangeRate = exchangeRateObject.conversion_rate;
  alert(USDAmount);
  console.log(exchangeRate);
}