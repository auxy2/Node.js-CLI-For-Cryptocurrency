import axios from "axios";
import color from "colors";

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.coingecko.com/api/v3/simple/price";
  }
  async getPriceData(coinOption, curOption) {
    try {
      const params = {
        ids: coinOption,
        vs_currencies: curOption,
      };
      const res = await axios.get(this.baseUrl, {
        params,
        headers: {
          "X-CoinGecko-API-Key": this.apiKey,
        },
      });

      //   res.data.forEah((coin) => {
      //     output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green}
      //   Rank: ${coin.rank.blue}`;
      //   });

      const output = `Coin: ${res.data.coinOption} | Price: ${res.data.coinOption.curOption}`;

      return output;
    } catch (err) {
      console.error("Error".red, err.message);
    }
  }
}

export default CryptoApi;
