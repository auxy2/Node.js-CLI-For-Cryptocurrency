#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Keys -- https://nomics.com")
  .parse(process.argv);

console.log("first coinbat");
