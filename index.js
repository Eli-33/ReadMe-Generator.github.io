
// External packages
const inquirer = require("inquirer");
const fs =  require("fs");
const axios = require("axios");
// Internal moduls
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
   {
      type: "input",
      name : "user name",
      message : "What is your github user name?",
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
    }
    },
    {
        type: "input",
        name : "repo",
        message : "What is your repo called?",
        default : "Good README Generator",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: "input",
        name : "Title",
        message : "What is your project title?",
        default : "Generate a README.md file",
    },
    {
        type: "input",
        name : "desc",
        message : "How do you describe your project?",
        default : "This application will generate a README.md file for your current project",
    },
    {
        type: "input",
        name : "install",
        message : "What are the steps required to install your project?",
        default : "Step1: Run npm install and Step2: Run node index.js",
    },
    {
        type: "input",
        name : "usage",
        message : "Write instructions for using your project.",
        default : "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. ",
    },
    {
        type: "input",
        name : "contributors",
        message : "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
        default : " Elahe Jamshidi, Amir Khademi and David Brown",
    },
    {
        type: "input",
        name : "test",
        message : "Provide examples on how to run tests.",
        default :"Insert your tests sample here...",
    },
    {
        type: "list",
        name : "license",
        message : "Choose a license for your project.",
        choices :['MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        axios
        get("https://api.github.com/users/" + answers.username)
        .then(response => {
            console.log(response);
            const imageURL = responsedata.avatar_url;
            answers.image = imageURL;
            console.log(imageURL);
            
        })
    })

}

// function call to initialize program
init();
