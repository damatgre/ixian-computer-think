//function to generate markdown for README
function generateMarkdown(answers) {
  return `
  #${answers.title}
    
 
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Email me with any questions: ${answers.questions}
  
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

  ## License
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-${answers.color}.img)](http://${answers.license}.org/)

  ## Contributing
  ${answers.contributing}

  `;

}

module.exports = generateMarkdown;
