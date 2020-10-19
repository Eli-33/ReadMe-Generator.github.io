// function to generate markdown for README
function generateMarkdown(data, badge) {
  return `
 
  # Project Title:${data.Title}

  ## Project Description : ${data.desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author](#Author)
  * [Badges](#badges)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  
  ## License
  ${data.license}

  ## Badges
  ${badge}
  
  ## Author 
  ![GitHub profile pic](${data.image})

  ## Email
  ${data.email}

  ## Questions
  If you have any questions, contact ${data.username} on GitHub.

`;

}

module.exports = generateMarkdown;
