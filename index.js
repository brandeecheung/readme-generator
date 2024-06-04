// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { 
      type: 'input',
      name: 'title',
      message: 'What is the title?'
    },
    { 
      type: 'input',
      name: 'description',
      message: 'What is the description?'
    },
    { 
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?'
    },
    { 
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?'
    },
    { 
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?'
    },
    { 
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?'
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'Unilcense']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    const markdownString = generateMarkdown(data);
    fs.writeFile(filename, markdownString , err  => {
        if(err)
          console.log('there was an error', err);
        else  
         console.log('Success!'); 
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        // do stuff with the data
        writeToFile("generated/README.md", data);
    });
}

// Function call to initialize app
init();

