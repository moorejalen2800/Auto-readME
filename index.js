// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown.js')


// TODO: Create an array of questions for user input
const question =  [
    {
      type: "input",
      message: "What is your GITHUB username?",
      name: "githubUser",
    },
    {
      type: "input",
      message: "What is your E-mail?",
      name: "Email",
    },
    {
      type: "input",
      message: "What is your title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a short description of your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "Would you like to provide a table of contents?",
      name: "table",
    },
    {
      type: "input",
      message:
        "Please provide the installation for the work in question.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter instructions for using this application:.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please provide the license.",
      name: "license",
    },
    {
      type: "input",
      message:
        " contributers who work on project?",
      name: "contributers",
    },
    {
      type: "input",
      message: "Please provide the tests .",
      name: "tests",
    },
    {
      type: "input",
      message: "Please provide the questions .",
      name: "questions",
    },
  ];

  // function for creating readmefile

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error,data) => 
    error ? console.log(error) : console.log(`${fileName} has been generated!`));
}


function init() {
   
   
   
   
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);


            data = generateMarkdown(response);
            writeToFile('README.md', data);
        });
    
}

