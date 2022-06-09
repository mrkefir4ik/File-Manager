import fs from 'fs';
import { messageUser } from '../../helpers.js';

export const readFile = async (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log('Operation failed', err);
        }
        else {
            console.log('\n', data, '\n');
            messageUser()
        }
    })
}