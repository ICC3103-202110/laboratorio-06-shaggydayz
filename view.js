const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Convert App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnite} = model
    const {rightValue} = model
    const {rightUnite} = model
    return [
        {
        leftValue: leftValue,
        leftUnite: leftUnite,
        rightValue: rightValue,
        rightUnite: rightUnite
        }
    ]
}

function inputForm(model){
    const {leftValue} = model
    const message = 'Left temperature is source?'
    const message2 = 'Temparature value to convert?'
    const message3 = 'From?'
    const message4 = 'To?'
    return inquirer.prompt([
        {
            name: 'yN',
            type: 'list',
            message: message,
            choices: ['Y', 'N']
        },
        {
            name: 'number',
            type: 'input',
            message: message2,
            default: leftValue
        },
        {
            name: 't1',
            type: 'list',
            message: message3,
            choices: ['Celsius', 'Fahrenheit', 'Kelvin']
        },
        {
            name: 't2',
            type: 'list',
            message: message4,
            choices: ['Celsius', 'Fahrenheit', 'Kelvin']
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}