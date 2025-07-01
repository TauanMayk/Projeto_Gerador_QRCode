import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.magentaBright("Digite o link para ser salvo no QRCode"),
  },
  {
    name: "type",
    description: chalk.greenBright(
      "Escolha entre o tipo de QRCode (1- Normal ou (2- Terminal"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.redBright("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
