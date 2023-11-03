import configStrore from "configstore";
import pkg from "../package.json";

class KeyManeger {
  constructor() {
    this.conf = new configStrore(pkg.name);
  }

  setKey(key) {
    this.conf.set("ApiKey", key);
    return key;
  }

  getKey() {
    this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No Api Key Found - Get a Key At https://nomics.com.com");
    }
    return key;
  }

  deleteKey() {
    this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No Api Key Found - Get a Key At https://nomics.com.com");
    }

    this.conf.delete("ApiKey");

    return;
  }
}

export default KeyManeger;