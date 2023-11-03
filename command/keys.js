import inquire from "inquirer";
import Color from "colors";
import { KeyManager } from "../lib/KeyManeger.js";
import { isRequired } from "../utils.js/validator.js";

export async function set() {
  const keyManeger = new KeyManager();
  const input = await inquire.prompt([
    {
      type: "inpute",
      name: "key",
      message: "Enter Api Key".green + "https://nomic.com",
      validate: isRequired,
    },
  ]);
  const key = keyManeger.setKey(input.key);
  if (key) {
    console.log("Api Key Set".blue);
  }
}

export function show() {
  try {
    const keyManeger = new KeyManager();
    const key = keyManeger.getKey();
    console.log("Current Api Key: ".yellow, key);
    return key;
  } catch (error) {
    console.error(error.message);
  }
}

export function remove() {
  try {
    const keyManeger = new KeyManager();
    const key = keyManeger.deleteKey();
    console.log("ApiKey Removed: ".green);
  } catch (err) {
    console.log("Error".red, err.message);
  }
}
