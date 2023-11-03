#!/usr/bin/env node

import { program } from "commander";
import { readFile } from "fs/promises";

(async () => {
  try {
    const packageJsonContent = await readFile(
      new URL("../package.json", import.meta.url),
      "utf-8"
    );

    const pkg = JSON.parse(packageJsonContent);

    program
      .version(pkg.version)
      .command("key", "Manage API Keys -- https://nomics.com")
      .parse(process.argv);

    console.log("first coinbat");
  } catch (error) {
    console.log("Error reading or parsing package.json:", error);
  }
})();
