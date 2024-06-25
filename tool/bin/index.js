#!/usr/bin/env node
//import('chalk')
const arg = require('arg');
//const chalk = require('chalk');

try {


const args = arg({
    '--start': Boolean,
    '--build': Boolean,
});

if (args['--start']) {
    console.log('starting the app');
}
} catch (e) {
    console.log(e.message);
    console.log();
    usage();
}

function usage() {
    console.log(`tool [CMD]
    --start\tStarts the app
    --build\tBuilds the app`)
}