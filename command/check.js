import { KeyManager } from "../lib/KeyManeger.js";
import CryptoApi from "../lib/CrytoApi.js";

const check = {
  async price(cmd) {
    try {
      const keyManeger = new KeyManager();
      const key = keyManeger.getKey();
      const api = new CryptoApi(key);
      console.log("1", cmd.cur);
      const priceOutPutData = await api.getPriceData(cmd.coin, "USD");
      console.log(priceOutPutData);
    } catch (err) {
      console.error("Error".red, err.message);
    }
  },
};

export default check;
