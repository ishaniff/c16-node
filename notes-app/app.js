const validator = require("validator");
const getNotes = require("./notes.js");
console.log(getNotes());

// use chalk, install chalk v 2.4.1, load chalk, print 'success' in green

const chalk = require("chalk");
const log = console.log;
log(chalk.green.bgBlue.bold("success"));
