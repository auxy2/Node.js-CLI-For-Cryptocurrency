import { color } from "colors";
import KeyManeger from "../lib/KeyManeger";
import inquire from "inquirer";

const key = {
  async set() {
    const keyManeger = new KeyManeger();
    const input = await inquire.prompt([
      {
        type: "inpute",
        inpute: "name",
        message: "Enter Api Key".green + "https://nomic.com",
      },
    ]);

    const key = keyManeger.setKey(input.key);
    if (key) {
      console.log("Api Key Aet".blue);
    }
  },
  show() {
    console.log("Show");
  },
  remove() {
    console.log("Remove");
  },
};

export default key;
