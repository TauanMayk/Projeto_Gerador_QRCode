import prompt from "prompt";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/passwords/create.js";
import { mainPrompt } from "./prompts/prompts-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (err) console.log(err);
    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
