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

const printWeather = (res) => {
    console.log(
        `${chalk.yellow('WEATHER')} Погода в городе ${res.name}
На данный момент: ${res.weather[0].description}
Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
Влажность: ${res.main.humidity}%
Скорость ветра: ${res.wind.speed}
        `
    )
}

export { printError, printSuccess, printHelp, printWeather };
