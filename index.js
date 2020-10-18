
// External packages
const inquirer = require("inquirer");
const fs =  require("fs");
const axios = require ("axios");

// Internal moduls
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: "input",
      name : "username",
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
        name : "email",
        message : "what is your Email adress?",
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
        choices :['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
];

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers);
        axios
        .get("https://api.github.com/users/"+ answers.username)
        .then(response => {
            console.log(response);
            var imageURL = response.data.avatar_url;
            answers.image = imageURL;
            console.log(imageURL);
            fs.writeFile("README.md", generateMarkdown(answers), function (err) {
                if (err) {
                    throw (err);
                }
            
// const badges = {
//     'GNU AGPLv3' : '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
//     'GNU GPLv3' : '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
//     'GNU LGPLv3' : '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
//     'Mozilla Public License 2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
//     'Apache License 2.0' : '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
//     'MIT License': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//     'Boost Software License 1.0': '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
//     'The Unlicense': '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
// };
// badges[answers.license];
            });
        });
    });
  
}

// function call to initialize program
init();
