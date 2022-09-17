// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'project_title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for using your application.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application.',
    choices: [
      'MIT License',
      'GNU General Public License v3.0',
      'Apache 2.0 License',
      'BSD 3-Clause License',
      'Not licensed.'
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Include guidelines for how other developers may contribute to your application.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe the different tests that can be performed with your application.'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile());
}

// Function call to initialize app
init();
