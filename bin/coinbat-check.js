import { program } from "commander";
import check from "../command/check.js";

program
  .command("price")
  .description("Check Price Of Coins")
  .option(
    "--coin <type>",
    "Add Specific Coin In CSV Format",
    "BTC,ETH,XRP,USDT,"
  )
  .option("--cur <Currency>", "Change Currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
