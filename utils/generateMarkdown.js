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
  [!License[${answers.license}](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=${answers.color})
  
  This application is covered by the ${answers.license} license. 

  ## Contributing
  ${answers.contributing}

  `;

}

module.exports = generateMarkdown;
