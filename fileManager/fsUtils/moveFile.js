import fs from 'fs';

export const moveFile = (original, copy) => {
    fs.copyFile(original, copy, function (err) {
        if (err) console.log('Operation failed', err);
        else fs.unlink(original, function (err) {
            if (err) console.log('Operation failed', err);
        });
    });
}