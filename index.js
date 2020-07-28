const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide any usage information."
    },
    {
        type: "input",
        name: "licenseName",
        message: "Please list the names of any licenses you would like to include."
    },
    {
        type: "input",
        name: "licenseURL",
        message: "Please list the URL of the licenses you would like to include."
    },
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
