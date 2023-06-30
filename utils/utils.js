const boxen = require("boxen");
const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const { stringsObj } = require("../data/descriptions/strings");
const { stringsExObj } = require("../data/examples/strings");
const figlet = require("figlet");

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const banner = async () => {
  figlet("JS - REF", (err, data) => {
    err ? console.log(err) : console.log(data);
  });
  await sleep();

  const rainbow = chalkAnimation.rainbow(
    "YOUR QUICK, SIMPLE, BASIC JAVASCRIPT REFERENCE"
  );
  await sleep();

  rainbow.stop();
  console.log();
  console.log();
};

const processEval = (arr, foo) => {
  return prompt([
    {
      type: "list",
      name: "method",
      message: chalk.yellow.bold.bgGreen("Choose an option to read more:"),
      choices: arr,
    },
  ])
    .then(async (answer) => {
      console.log();
      console.log();

      console.log(
        boxen(chalk.bold.white(stringsObj[answer.method]), {
          backgroundColor: "black",
          borderColor: "red",
          borderStyle: "double",
          padding: 3,
          margin: 1,
          title: `${answer.method}`,
        })
      );

      console.log(
        boxen(chalk.bold.white(stringsExObj[answer.method]), {
          backgroundColor: "black",
          borderColor: "red",
          borderStyle: "double",
          padding: 3,
          margin: 1,
          title: `EXAMPLE:`,
        })
      );

      foo();
    })
    .catch((err) => console.log(err));
};

module.exports = {
  processEval,
  banner,
};
