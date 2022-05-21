// TODO: Include packages needed for this application
const inq = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const { windowCount } = require ('rxjs');
// const { create } = require('domain');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {

        type: 'input',
        name: 'description',
        message: 'What is your project all about?',
    },
    {

        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },

    {
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		// default: 'Gaining EXP with Node',
	},
    {
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'MIT', 'GPL'],
	},
    {
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
		// default: 'You can NOT',
	},
    {

        type: 'input',
        name: 'deployedLink',
        message: 'What is the link to your deployed project?',
    },
    {

        type: 'input',
        name: 'githubusername',
        message: 'What is your GitHub username?',
    },
    {

        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]

function createReadme(data) {
    var license = '';
    var licensetext = '';
    switch (data.license[0]) {
            case 'BSD':
                license =
                    '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
                licensetext = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
                break;
            case 'MIT':
                license =
                    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                licensetext = `[MIT License](https://opensource.org/licenses/MIT)`;
                break;
            case 'GPL':
                license =
                    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                licensetext = `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;
    
                break;
            default:
                license = 'No License Chosen';
                licensetext = ``;
    
                break;
        }
        fs.writeFileSync(
            './readme.md',
            `# ${data.project}
    ${license}
    ## Table of Contents
    - [Description](#description)
    - [Application Preview](#application-preview)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Test Instructions](#test-instructions)
    - [Questions](#questions)
    - [License](#license)
    ## Description
    - ${data.description}
    ## Application Preview
    <p align="left">
    <img alt="README Gen Demo 1" src="${data.preview}">
    </p>
    ## Installation
    - ${data.install}
    ## Usage
    - ${data.usage}
    ## Contributing
    - ${data.contribute}
    ## Test Instructions
    - ${data.test}
    ## Questions
    Questions? Concerns?  Contact Me Below:
    - Github Username: ${data.github}
    - Github Link: https://github.com/${data.github} 
    - Email: ${data.email}
    ## License
    - Copyright 2022 Jasmine Tsao
    - Licensed under the: ${licensetext} 
    `
        );
    };
    
    // CLI Prompts
    inq.prompt(questions).then((data) => {
        createReadme(data);
        const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
