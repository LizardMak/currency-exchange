window.addEventListener("load", function () {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

async function handleSubmit() {
  event.preventDefault();
  let USDAmount = document.getElementById("amountUSD").value;
  let exchangeTo = document.querySelector('input[name="currency"]:checked').id;
  let exchangeRateObject = await getExchangeRate(exchangeTo);
  let exchangeRate = exchangeRateObject.conversion_rate;
  alert(USDAmount);
  console.log(exchangeRate);
}

function getExchangeRate(exchangeTo) {
  return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeTo}`)
  .then(function(response) {
    if (!response.ok) {
      const errorMessage = `${response.status}, search for 'error ${response.status} API' online for more details`;
      throw new Error(errorMessage);
    } else {
      return response.json();
    }
  })
  .catch(function(error) {
    document.getElementById("errorMessage").innerHTML = error;
    return error;
  });
}
//back from lunch