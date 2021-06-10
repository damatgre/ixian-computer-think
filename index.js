// TODO: Include packages needed for this application
//require inquirer
//require generateMarkdown
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        //project / input
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        //description / input
        {
            type: "input",
            name: "description",
            message: "Give a brief description of the project.",
        },
        //installation / input
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
        //license figure out how to run through generateMarkdown
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
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    //ask questions (activity 2 from monday)
    //call generateMarkdown function which will return a string
    //call writeToFile function pass to it a file name and the string returned by the generateMarkdown function
}

// Function call to initialize app
questions();
