// ! Requires
const fs = require("fs");
const prettier = require("prettier");
const enquirer = require("enquirer");
const chalk = require("chalk");

// ! Imports
const { TransformObject, CheckCharacters } = require("./cryptography");
const prc = require("../../next.config.js").publicRuntimeConfig;

enquirer
  .prompt([
    {
      type: "select",
      name: "option",
      message: "Select option: ",
      choices: ["Encrypt data", "Decrypt data"],
    },
  ])
  .then((answers) => {
    enquirer
      .prompt(
        Array(prc.N_CRYPTO_KEYS)
          .fill()
          .map((e, i) => ({
            type: "input",
            name: `key${i}`,
            message: `Key ${i}`,
          }))
      )
      .then((keys) => {
        switch (answers.option) {
          case "Encrypt data":
            encrypt_data(Object.values(keys));
            break;
          case "Decrypt data":
            decrypt_data(Object.values(keys));
            break;
          default:
            // * No option selected
            console.log(chalk.bold.red("No option was selected!"));
        }
      });
  });

function encrypt_data(VALUES) {
  // ! Encrypt data from _data.json
  // * Read origin file
  const rawData = fs.readFileSync("./assets/data/_data.json");
  const data = JSON.parse(rawData);

  // * Check characters
  const check = CheckCharacters(data, VALUES);

  if (check) {
    // * Encrypt layers
    let dataState = data;
    let KEYS = VALUES.slice();
    while (KEYS.length) {
      dataState = TransformObject(dataState, "encrypt", KEYS);
      KEYS.pop();
      const NV = VALUES.length;
      const NK = KEYS.length;
      KEYS = KEYS.map((e, i) => VALUES.slice(i, i + 1 + NV - NK).join(""));
    }

    // * Stringify and formatting
    dataState = JSON.stringify(dataState);
    dataState = prettier.format(dataState, {
      parser: "json",
      tabWidth: 2,
    });

    // * Write target file
    fs.writeFileSync("./assets/data/data.json", dataState);
    console.log(chalk.bold.yellow("encrypted data saved!"));
  }
}

function decrypt_data(VALUES) {
  // ! Decrypt data from data.json
  // * Read target file
  const rawData = fs.readFileSync("./assets/data/data.json");
  const data = JSON.parse(rawData);

  // * Check characters
  const check = CheckCharacters(data, VALUES);

  if (check) {
    // * Decrypt layers
    let dataState = data;
    let KEYS = VALUES.slice();
    while (KEYS.length) {
      dataState = TransformObject(dataState, "decrypt", KEYS);
      KEYS.pop();
      const NV = VALUES.length;
      const NK = KEYS.length;
      KEYS = KEYS.map((e, i) => VALUES.slice(i, i + 1 + NV - NK).join(""));
    }

    // * Stringify and formatting
    dataState = JSON.stringify(dataState);
    dataState = prettier.format(dataState, {
      parser: "json",
      tabWidth: 2,
    });

    // * Write origin file
    fs.writeFileSync("./assets/data/_data.json", dataState);
    console.log(chalk.bold.yellow("decrypted data saved!"));
  }
}
