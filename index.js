// TODO: Include packages needed for this application
//require inquirer
//require generateMarkdown
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        //project 
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        //description
        {
            type: "input",
            name: "description",
            message: "Give a brief description of the project.",

        },
        //installation
        {
            type: "input",
            name: "install",
            message: "Describe the installation process (if applicable): ",
        },
        //usage
        {
            type: "input",
            name: "usage",
            message: "What is the projects usage?",
        },
        //license choice
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        //contributors
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        //tests
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions?",
        },
        //questions
        {
            type: "input",
            name: "questions",
            message: "How should any users direct their questions?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email for any questions!');
                    return false;
                }
            }
        },
        //github username
        {
            type: "input",
            name: "credits",
            message: "What is your Github username?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter your username.");
                }
                return true;
            },
        },
        //link to github figure out placement. 
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your repository. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a repo GitHub link!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `${answers.title}-README.md`;
    //populates the read me file
    fs.writeFile(fileName, data, (err) => {
        //if error
        if (err) {
            return console.log(err);
        }
        //if file made
        console.log("Success! Your document is ready for use!");
    });
};

//init function with async
async function init() {
    try {
        //catch and store responses
        const answers = await questions();
        console.log(answers);
        //pass responses to markdown function
        const markdownFile = await generateMarkdown(answers);
        console.log(markdownFile);

        // Write new README.md to dist directory
        writeToFile('./dist/README.md', markdownFile);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();