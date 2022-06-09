import fs from 'fs';

export const renameFile = (oldName, newName) => {
    fs.rename(oldName, newName, function (err) {
        if (err) console.log('Operation failed', err)
    });
}