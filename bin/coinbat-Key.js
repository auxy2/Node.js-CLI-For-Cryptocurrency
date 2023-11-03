import { program } from "commander";
import { set, show, remove } from "../command/keys.js";

program
  .command("set")
  .description("Set API Key -- Get at https://nomics.com")
  .action(set);
program.command("show").description("Show API Key").action(show);
program.command("remove").description("Remove API Key").action(remove);

program.parse(process.argv);
