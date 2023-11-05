import axios from "axios";
import color from "colors";

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://min-api.cryptocompare.com/data/pricemulti";
  }
  async getPriceData(coinOption, curOption) {
    try {
      console.log("2", curOption);
      const res = await axios.get(
        `${this.baseUrl}?fsyms=${coinOption}&tsyms=${curOption}`
      );
      console.log(res.data);
      const data = res.data;

      let output = "";
      for (const coin in data) {
        const price = data[coin].USD;
        console.log(price.yellow);
        output += `Coin: ${coin.green} | Price: ${data[
          coin
        ].USD.toLocaleString()} ${Object.keys(data[coin])}\n`;
      }

      // const output = `Coin: ${res.data.coinOption} | Price: ${res.data.coinOption.curOption}`;

      return output;
    } catch (err) {
      console.error("Error".red, err.message);
    }
  }
}
export default CryptoApi;
