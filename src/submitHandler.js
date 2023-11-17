window.addEventListener("load", function () {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

function handleSubmit() {
  event.preventDefault();
  let USDAmount = document.getElementById("amountUSD").value;
  let exchangeTo = document.querySelector('input[name="currency"]:checked').id;
  
}