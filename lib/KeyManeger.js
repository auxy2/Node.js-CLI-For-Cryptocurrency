import configStore from "configstore";
import pkg from "../package.json" assert { type: "json" };

export class KeyManager {
  constructor() {
    this.conf = new configStore(pkg.name);
  }

  setKey(key) {
    this.conf.set("ApiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No Api Key Found - Get a Key At https://nomics.com.com");
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No Api Key Found - Get a Key At https://nomics.com.com");
    }

    this.conf.delete("ApiKey");

    return;
  }
}
