// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title: ${data.title}

## Project Description : ${data.desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author] (#Author)
  * [Badges](#badges)

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  

## Questions
  If you have any questions, contact ${data.username} on GitHub.

  ## License
 


  ## Author 
  

  ## Badges


`;
}

module.exports = generateMarkdown;
