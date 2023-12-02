#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token: string): Promise<void> => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (e) {
        printError((e as Error).message);
    }
};

const saveCity = async (city: string): Promise<void> => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен');
    } catch (e) {
        printError((e as Error).message);
    }
};

const getForcast = async (): Promise<void> => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        if (!city) {
            throw new Error('Город не установлен');
        }
        const weather = await getWeather(city);
        printWeather(weather);
    } catch (e: any) {
        if (e.response?.status === 404) {
            printError('Неверно указан город');
        } else {
            printError((e as Error).message);
        }
    }
}

const initApp = (): void | Promise<void> => {
    const args: Record<string, any> = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }

    if (args.c) {
        return saveCity(args.c);
    }

    if (args.t) {
        return saveToken(args.t);
    }

    return getForcast();
}

initApp();