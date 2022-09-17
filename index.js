// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    default: 'Project Title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    default: 'Project Description',
    message: 'Describe your project.'
  },
  {
    type: 'input',
    name: 'installation',
    default: 'Installation Instructions',
    message: 'Enter installation instructions. How should users install the application?'
  },
  {
    type: 'input',
    name: 'usage',
    default: 'Usage Information',
    message: 'Enter usage information. How should users run the application?'
  },
  {
    type: 'list',
    name: 'license',
    default: 'License',
    message: 'Choose a license for your application.',
    choices: [
      'MIT',
      'GNU v3.0',
      'Apache 2.0',
      'BSD 3-Clause',
      'Not licensed.'
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    default: 'Fork this repository.',
    message: 'How can other developers contribute to your application?'
  },
  {
    type: 'input',
    name: 'tests',
    default: 'Not applicable or not developed yet.',
    message: 'Write tests for your application.'
  },
  {
    type: 'input',
    name: 'github',
    default: 'GitHub Username',
    message: 'What is your GitHub username? No "@" required.'
  },
  {
    type: 'input',
    name: 'email',
    default: 'Email Address',
    message: 'What is your email?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generating README.md file!')
)};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => 
  writeToFile('README.md', generateMarkdown(answers))
)};

// Function call to initialize app
init();
