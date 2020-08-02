// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licenses](#Licenses)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
This application is covered under ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any further questions, feel free to contact me on GitHub at http://github.com/${data.github} or send me an email at: ${data.email}.
`;
}

module.exports = generateMarkdown;
