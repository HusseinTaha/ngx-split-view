'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const destination = 'dist/ngx-split-view';
const files = ['LICENSE', 'README.md'];

async function main(args) {

    for (const file of files) {
        const sourcePath = path.resolve(__dirname, '..', file);
        const destinationPath = path.resolve(__dirname, '..', destination, file);

        console.log(`Copying '${file}' ...`);

        const data = await readFile(sourcePath);
        await writeFile(destinationPath, data);
    }

}

main(process.argv.slice(2))
    .then(exitCode => process.exit(exitCode))
    .catch(err => {
        console.error('ERROR: ', err);
        process.exit(-1);
    });
