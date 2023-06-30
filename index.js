#! /usr/bin/env node
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const chalk = require("chalk");
const { processEval, banner } = require("./utils/utils");
const { customQuestion } = require("./components/openai");
const { data_types } = require("./data/data_types");
const stringsArr = require("./data/strings");
const numbersArr = require("./data/numbers");
const mathArr = require("./data/math");

const evalInitPrompt = (strPrompt) => {
  switch (strPrompt) {
    case "cancel":
      return process.exit(0);
    case "custom question":
      return customQuestion(appInit);
    case "strings":
      return processEval(stringsArr, appInit);
    case "number":
      return processEval(numbersArr, appInit);
    case "math":
      return processEval(mathArr, appInit);
    default:
      return appInit();
  }
};

const appInit = () => {
  return prompt([
    {
      type: "list",
      name: "method",
      message: chalk.yellow.bold.bgBlue("Choose an option to find reference:"),
      choices: data_types,
    },
  ])
    .then(async (answer) => {
      return evalInitPrompt(answer.method);
    })
    .catch((err) => console.log(err));
};

const runApp = async () => {
  await banner();
  appInit();
};

runApp();
