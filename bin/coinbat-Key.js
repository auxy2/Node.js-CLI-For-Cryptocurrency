const program = require("commander");
const key = require("../command/keys.js");

program
  .command("set")
  .description("Set API Key -- Get at https://nmics.com")
  .action(key.set);
program.command("show").description("Show API Key").action(key.show);
program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
