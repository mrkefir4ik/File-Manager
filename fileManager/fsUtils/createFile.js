import fs from 'fs';
import { dirname } from 'path';

export const createFile = (path) => {
    fs.mkdir(dirname(path), { recursive: true }, function (err) {
        if (err) console.log('Operation failed', err);

        else fs.writeFile(path, '', function (err) {
            if (err) console.log('Operation failed', err)
        });
    });
}