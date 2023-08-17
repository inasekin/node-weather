const getArgs = (args) => {
    const result = {};

    const [executer, file, ...rest] = args;

    for (let i = 0; i < rest.length; i++) {
        if (rest[i].charAt(0) === '-') {
            if (i === rest.length - 1) {
                result[rest[i].substring(1)] = true;
            } else if (rest[i + 1].charAt(0) !== '-') {
                result[rest[i].substring(1)] = rest[i + 1];
            } else {
                result[rest[i].substring(1)] = true;
            }
        }
    }

    return result;
};

export { getArgs };
