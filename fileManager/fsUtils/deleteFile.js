import fs from 'fs';

export const deleteFile = (path) => {

    fs.unlink(path, function (err) {
        if (err) console.log('Operation failed', err);
    });

};