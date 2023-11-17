window.addEventListener("load", function () {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

function handleSubmit() {
  event.preventDefault();
  let USDAmount = document.getElementById("amountUSD").value;
  let exchangeTo = document.querySelector('input[name="currency"]:checked').id;
  let exchangeRate = getExchangeRate(exchangeTo);
  alert(USDAmount);
  alert(exchangeRate);
}

function getExchangeRate(exchangeTo) {
  return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeTo}`)
  .then(function(response) {
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    } else {
      return response.json();
    }
  })
  .catch(function(error) {
    return error;
  });
}