import { join } from 'node:path';
import { promises as fs } from 'node:fs';

const filePath = join(process.cwd(), 'weather-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city',
};

const isExist = async (path: string): Promise<boolean> => {
    try {
        await fs.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};

const getKeyValue = async (key: string): Promise<string | undefined> => {
    if (await isExist(filePath)) {
        const file = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(file);

        return data[key];
    }

    return undefined;
};

const saveKeyValue = async (key: string, value: string): Promise<void> => {
    let data: Record<string, string> = {};

    if (await isExist(filePath)) {
        const file = await fs.readFile(filePath, 'utf8');
        data = JSON.parse(file);
    }

    data[key] = value;

    await fs.writeFile(filePath, JSON.stringify(data));
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };