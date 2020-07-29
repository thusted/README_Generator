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
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any further questions, feel free to contact me at ${data.github}@github.com or ${data.email}.
`;
}

module.exports = generateMarkdown;
