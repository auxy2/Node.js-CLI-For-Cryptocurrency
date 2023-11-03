import { KeyManager } from "../lib/KeyManeger.js";
import CryptoApi from "../lib/CrytoApi.js";

const check = {
  async price(cmd) {
    try {
      const keyManeger = new KeyManager();
      const key = keyManeger.getKey();
      const api = new CryptoApi(key);
      const priceOutPutData = await api.getPriceData(cmd.coin, cmd.cur);
      console.log(priceOutPutData);
    } catch (err) {
      console.error("Error".red, err.message);
    }
  },
};

export default check;
