#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";
import {printHelp} from "./services/log.service.js";

const initApp = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp()
    }

    if (args.c) {

    }

    if (args.t) {

    }
}

initApp();
