import fs from 'fs';

export const copyFile = (original, copy) => {
    fs.copyFile(original, copy, function (err) {
        if (err) console.log('Operation failed', err)
    });
}