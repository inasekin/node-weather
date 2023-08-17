#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message);
    }
};

const initApp = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp()
    }

    if (args.c) {

    }

    if (args.t) {
        return saveToken(args.t);
    }
}

initApp();
