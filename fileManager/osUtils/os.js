import os from 'os';

export const getOSData = (param) => {
    switch (true) {

        case 'EOL' == param: {
            console.log(JSON.stringify(os.EOL));
            break;
        }


        case 'cpus' == param: {
            console.log('Total CPUs amount is ', os.cpus().length);
            os.cpus().forEach(core => {
                console.log({
                    model: core.model,
                    clockRate: (core.speed / 1000).toFixed(1) + 'GHz'
                })
            })
            break;
        }


        case 'homedir' == param: {
            console.log(os.homedir());
            break;
        }


        case 'username' == param: {
            console.log(os.userInfo().username);
            break;
        }


        case 'architecture' == param: {
            console.log(os.arch());
            break;
        }


        default: {
            console.log('Invalid input');
            console.log('Unknown flag');
        }
    }


};