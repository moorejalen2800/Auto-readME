//TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
console.log(" Welcome to my generator ReadMe")

// TODO: Create an array of questions for user input
const question = [
    {
        type: "input",
        message: "What is your GITHUB username?",
        name: "githubUser",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your E-mail?",
        name: "Email",
        validate: yourInput => {
            if (yourInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "What is your title of your project?",
        name: "title",
        validate: yourInput => {
            if (yourInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message:
            "Would you like to provide a table of contents?",
        name: "table",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message:
            "Please provide the installation for the work in question.",
        name: "installation",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Enter instructions for using this application:.",
        name: "usage",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please provide the license.",
        name: "license",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false; 
            }
        }
    },

    {
        type: "input",
        message:
            " contributers who work on project?",
        name: "contributers",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please provide the tests .",
        name: "tests",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please provide the questions .",
        name: "questions",
        validate: youInput => {
            if (youInput) {
                return true;
            } else {
                console.log('Enter input Github to continue');
                return false;
            }
        }
    },

];

// function for creating readmefile
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    })
};

function init() {
    inquirer.prompt(question)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("READ.md", generateMarkdown(userInput));
        
        });
};

init();
