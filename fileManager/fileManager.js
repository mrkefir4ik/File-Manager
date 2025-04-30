import path from 'path';
import fs from 'fs';
import os from 'os';
import { messageUser } from '../helpers.js';
import { readFile } from './fsUtils/readFile.js';
import { createFile } from './fsUtils/createFile.js';
import { renameFile } from './fsUtils/renameFile.js';
import { copyFile } from './fsUtils/copyFile.js';
import { moveFile } from './fsUtils/moveFile.js';
import { deleteFile } from './fsUtils/deleteFile.js';
import { getOSData } from './osUtils/os.js';
import { giveHash } from './crypto/calculateHash.js';
import { compressFile } from './zip/compress.js';
import { decompressFile } from './zip/decompress.js';

const root = path.parse(process.cwd()).root;

export const fileManager = async () => {
    process.chdir(os.homedir());

    messageUser();

    process.on('uncaughtException', function (err) {
        console.log('Operation failed: ', err);
        messageUser();
    });

    process.stdin.on('data', async data => {
        switch (true) {

            case '.exit' == data.toString().trim(): {
                process.exit()
                break;
            }


            case 'root' == data.toString().trim(): {
                console.log(root);
                break;
            }


            case 'up' == data.toString().trim(): {
                if (process.cwd() == root) console.log('Can not go up. You have reached root folder.');
                else process.chdir('..')
                break
            }


            case 'ls' == data.toString().trim(): {
                fs.readdirSync(process.cwd()).forEach(item => console.log(item))
                break
            }


            case data.toString().trim().startsWith('cat'): {
                const param = data.toString().trim().split(' ')[1];
                await readFile(param);
                break
            }


            case data.toString().trim().startsWith('add'): {
                const param = data.toString().trim().split(' ')[1];
                createFile(param);
                break
            }


            case data.toString().trim().startsWith('rn'): {
                const oldName = data.toString().trim().split(' ')[1];
                const newName = data.toString().trim().split(' ')[2];
                renameFile(oldName, newName);
                break
            }


            case data.toString().trim().startsWith('cp'): {
                const original = data.toString().trim().split(' ')[1];
                const copy = data.toString().trim().split(' ')[2];
                copyFile(original, copy);
                break
            }


            case data.toString().trim().startsWith('mv'): {
                const original = data.toString().trim().split(' ')[1];
                const copy = data.toString().trim().split(' ')[2];
                moveFile(original, copy);
                break
            }


            case data.toString().trim().startsWith('rm'): {
                const path = data.toString().trim().split(' ')[1];
                deleteFile(path);
                break
            }


            case data.toString().trim().startsWith('cd'): {
                const param = data.toString().trim().split(' ')[1];
                process.chdir(param);
                break
            }


            case data.toString().trim().startsWith('os'): {
                const param = data.toString().trim().split(' ')[1]?.replace(/-/g, "");
                getOSData(param);
                break
            }


            case data.toString().trim().startsWith('hash'): {
                const path = data.toString().trim().split(' ')[1];
                giveHash(path)
                break
            }


            case data.toString().trim().startsWith('compress'): {
                const original = data.toString().trim().split(' ')[1];
                const dest = data.toString().trim().split(' ')[2];
                compressFile(original, dest);
                break
            }


            case data.toString().trim().startsWith('decompress'): {
                const original = data.toString().trim().split(' ')[1];
                const dest = data.toString().trim().split(' ')[2];
                decompressFile(original, dest);
                break
            }


            default: {
                console.log(data.toString());
                console.log('Invalid input');
            }
        }

        messageUser();
    });
}
