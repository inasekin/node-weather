const getArgs = (args: string[]): Record<string, string | boolean> => {
    const result: Record<string, string | boolean> = {};
    const [executer, file, ...rest] = args;

    rest.forEach((arg, index) => {
        if (arg.startsWith('-')) {
            const key = arg.substring(1);
            result[key] = rest[index + 1] && !rest[index + 1].startsWith('-') ? rest[index + 1] : true;
        }
    });

    return result;
};

export { getArgs };