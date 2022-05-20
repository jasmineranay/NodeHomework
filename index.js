// TODO: Include packages needed for this application
const inq = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
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
        name: 'title',
        message: 'What is the title of your project?',
    },
    {

        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {

        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
]

async function createReadme(answers) {
 fs.writeFileSync('./READ.md', `
 # ${answers.title}
 ## Description
 ${answers.description}
 ## Installation Instructions
 ${answers.installation}
 ## Deployed Link
 [deployed link]($answers{answers.deployedLink})
 `)
}

inq
.prompt(questions)
.then((answers) => {
    createReadme(answers)
    console.log(chalk.green('Sucessfully created README.md'))
})
.catch((error) => {
    if (error.isTtyError) {
        console.error('Prompts could not be rendered in current environment!')
    } else {
        console.error(`Something went wrong!`, error)
    }
    
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

createReadme()