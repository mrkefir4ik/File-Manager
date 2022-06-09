import { getArgs } from './helpers.js'
import { fileManager } from './fileManager/fileManager.js'
//onstart
const username = getArgs().username
console.log(`Welcome to the File Manager, ${username}!`);

//onexit
const exitHandler = () => {
    console.log(`Thank you for using File Manager, ${username}!`);
}

process.on("exit", exitHandler);

//work
try {
    fileManager();
}
catch (e) {
    throw e;
}

