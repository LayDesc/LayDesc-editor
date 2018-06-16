const fs = require("fs");

const srcDirectory = '/Users/azertypow/Documents/appDev/_LayDesc/LayDesc-api/dist/';
const distDirectory = './';

fs.watch(srcDirectory, (event, filename) => {
    console.log('event is: ' + event);
    if (filename) {
        fs.copyFile( `${srcDirectory}${filename}`, `${distDirectory}${filename}`, (err) => {
            if (err) throw err;
            const date = new Date();
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${filename} was copied to destination.txt`);
        });
    } else {
        console.log('filename not provided');
    }
});