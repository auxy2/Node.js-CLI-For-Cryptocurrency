import { program } from "commander";
import check from "../command/check.js";

program
  .command("price")
  .description("Check Price Of Coins")
  .option(
    "--coin <type>",
    "Add Specific Coin In CSV Format",
    "bitcoin, ethereum, tether, ripple, tron"
  )
  .option("--cur <Currency>", "Change Currency", "USDT")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
