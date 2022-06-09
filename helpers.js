export const getArgs = () => {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(argument => {
            if (argument.slice(0, 2) === '--') {
                const argString = argument.split('=');
                const argStringFlag = argString[0].slice(2, argString[0].length);
                const argStringValue = argString.length > 1 ? argString[1] : true;
                args[argStringFlag] = argStringValue;
            }
            else if (argument[0] === '-') {
                const flags = argument.slice(1, argument.length).split('');
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}

export const messageUser = () => {
    console.log(`You are currently in ${process.cwd()}`);
    process.stdout.write('Please enter a command: ')
}