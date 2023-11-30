import printError from "./printError";

export default class ExchangeRates {
  static async getExchangeRate(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`);
      const responseJson = await response.json();
      if (!response.ok) {
        if (response.status === 404) {
          const errorMessage = "Error: Currency does not exist!";
          throw new Error(errorMessage);
        } else {
          const errorMessage = `${response.status}, search for 'error ${response.status} API' online for more details`;
          throw new Error(errorMessage);
        }
      } else {
        return responseJson;
      }
    }
    catch (error) {
      printError(error);
      return error;
    }
  }
}