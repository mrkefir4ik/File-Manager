import crypto from 'crypto';
import fsPromises from 'fs/promises';
import { messageUser } from '../../helpers.js';

export const giveHash = async (path) => {
    await fsPromises.readFile(path)
        .then(data => crypto.createHash('sha256').update(data).digest('hex'))
        .then(data => {
            console.log('\n', data);
            messageUser();
        })
        .catch(err => console.log('Invalid input', err))
}
