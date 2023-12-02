import chalk from 'chalk';
import {WeatherData} from "./api.service.js";

const printError = (error: string): void => {
    console.log(chalk.red(`ERROR: ${error}`));
};

const printSuccess = (message: string): void => {
    console.log(chalk.green(`SUCCESS: ${message}`));
};

const printHelp = (): void => {
    console.log(`${chalk.cyan('HELP')}
Без параметров - вывод погоды
-c [CITY] для установки города
-h для вывода помощи
-t [API_KEY] для сохранения токена
    `);
};

const printWeather = (weather: WeatherData): void => {
    console.log(`${chalk.yellow('WEATHER')} Погода в городе ${weather.name}
На данный момент: ${weather.weather[0].description}
Температура: ${weather.main.temp} (ощущается как ${weather.main.feels_like})
Влажность: ${weather.main.humidity}%
Скорость ветра: ${weather.wind.speed}
    `);
};

export { printError, printSuccess, printHelp, printWeather };