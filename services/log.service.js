import chalk from 'chalk';

const printError = (err) => {
    console.log(chalk.red('ERROR' + ' ' + err));
}

const printSuccess = (info) => {
    console.log(chalk.green('SUCCESS' + ' ' + info));
}

const printHelp = () => {
    console.log(
        `${chalk.cyan('HELP')}
Без параметров - вывод погоды
-c [CITY] для установки города
-h для вывода помощи
-t [API_KEY] для сохранения токена
        `
    )
}

export { printError, printSuccess, printHelp };
