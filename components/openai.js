const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: `${process.env.SEC_KEY}`,
});

const openai = new OpenAIApi(configuration);

const chatGPT = async (str) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${str}`,
    });
    let answer = completion.data.choices[0].text;
    return answer;
  } catch (err) {
    console.log();
    console.log("OpenAi says we need to give davinci a break =(");
    console.log();
    appInitFoo();
  }
};

const customQuestion = (appInitFoo) => {
  return prompt([
    {
      type: "input",
      name: "question",
      message: "Enter your question:",
    },
  ])
    .then((answer) => {
      return chatGPT(answer.question);
    })
    .catch((err) => {
      console.log("Something went wrong");
      appInitFoo();
    });
};

module.exports = {
  customQuestion,
};
