//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = requre("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation instructions for your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide any usage information:"
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license you would like to include:",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe any contributions that were made:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe any tests for your project:"
    }
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown.generateMarkdown(answers);
        writeToFile("README.md", data);
        console.log("Successfully wrote to file!");
    })
}

// function call to initialize program
init();
