export function DataConstructer(USD, currency, exchangeRate) {
  this.USD = USD;
  this.currency = currency;
  this.exchangeRate = exchangeRate;
  this.exchangeCurrency = function () {
    let newAmount = this.USD * this.exchangeRate;
    let fixedNewAmount = newAmount.toFixed(2);
    let currencySymbol = "";
    if (this.currency === "EUR") {
      currencySymbol = "€";
    } else if (this.currency === "MXN" || this.currency === "CAD") {
      currencySymbol = "$";
    } else if (this.currency === "JPY" || this.currency === "CNY") {
      currencySymbol = "¥";
    }
    return currencySymbol + fixedNewAmount;
  };
}
