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
    message: 'Describe your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'List installation instructions.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information.'
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
    message: 'How can other developers contribute to your application?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can we run a test for your application?'
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
