#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.red.bold('<<<<<<<<>>>>>>>> ') + (chalk.whiteBright.bold('Welcome to the Currency Converter') + (chalk.red.bold(' <<<<<<<<>>>>>>>>'))));
console.log(chalk.red.bold('<<<<<<<<>>>>>>>> ') + (chalk.whiteBright.bold('Created By Shoaib Siddiq') + (chalk.red.bold(' <<<<<<<<>>>>>>>>\n'))));
const currencyRate = {
    USD: 1,
    KWD: 0.31,
    BHD: 0.38,
    GBP: 0.82,
    AFG: 72.93,
    PKR: 280,
};
while (true) {
    let user_answer = await inquirer.prompt([
        {
            name: 'from',
            message: 'Enter From Currency',
            type: 'list',
            choices: ['USD', 'KWD', 'BHD', 'GBP', 'AFG', 'PKR']
        },
        {
            name: 'to',
            message: 'Enter To Currency',
            type: 'list',
            choices: ['USD', 'KWD', 'BHD', 'GBP', 'AFG', 'PKR']
        },
        {
            name: 'amount',
            message: 'Enter your amount',
            type: 'number',
        }
    ]);
    let fromAmount = currencyRate[user_answer.from];
    let toAmount = currencyRate[user_answer.to];
    let amount = user_answer.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
    let againAsk = await inquirer.prompt([
        {
            name: 'askAgain',
            message: 'Do you want to convert more currency?',
            type: 'list',
            choices: ['Yes', 'No']
        }
    ]);
    if (againAsk.askAgain === 'Yes') {
        console.log('Here is your currency list Select One');
    }
    else {
        console.log(chalk.bold('Thank you for using the app.'));
        break;
    }
}
