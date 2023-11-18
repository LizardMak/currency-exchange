import ExchangeRates from "./getExchangeRate";
import { DataConstructer } from "./constructData";

window.addEventListener("load", function () {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit);
});

async function handleSubmit() {
  event.preventDefault();
  let USDAmount = document.getElementById("amountUSD").value;
  let exchangeTo = document.querySelector('input[name="currency"]:checked').id;
  let exchangeRateObject = await ExchangeRates.getExchangeRate(exchangeTo);
  let exchangeRate = exchangeRateObject.conversion_rate;
  if (isNaN(exchangeRate)) {
    return;
  }
  let dataConstuct = new DataConstructer(USDAmount, exchangeTo, exchangeRate);
  let result = dataConstuct.exchangeCurrency();
  document.getElementById("result").removeAttribute("class");
  document.getElementById("errorMessage").setAttribute("class", "hidden");
  document.getElementById("result").innerHTML = result;
}