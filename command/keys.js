const color = require("colors");
const KeyManeger = require("../lib/KeyManeger");
const inquire = require("inquirer");

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

module.exports = key;
