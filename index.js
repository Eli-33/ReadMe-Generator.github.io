
// External packages
const inquirer = require("inquirer");
const fs =  require("fs");
const util = require ("util");
const axios = require("axios");
const writeFileAnync = util.promisify(fs.writeFile);
// Internal moduls
const generateMarkdown = require('./utils/generateMarkdown.js');
const { Console } = require("console");
const { get } = require("http");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },
    
      {
        type: "input",
        message: "What is your project Title?",
        name: "title",
        default: "Generate a README.md file "
      },
    
      {
        type: "input",
        message: "What is your repo called?",
        name: "repo",
        default: "GoodREADMEGenerator"
      },
    
      {
        type: "input",
        message: "How do you describe your Project?.",
        name: "desc",
        default:
          " This application will generate a README.md file for your current project"
      },
    
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
        default: "Step1: Run npm install and Step2: Run node index.js"
      },
    
      {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage",
        default:
          "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
      },
    
      {
        type: "input",
        message:
          "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
        name: "contributors",
        default: " Robert McKenney, Abdul Amoud and Igor Calvacante"
      },
    
      {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "test",
        default: "Insert your tests sample here..."
      }
    
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
