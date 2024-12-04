const validator = require("validator");
const getNotes = require("./notes.js");
console.log(getNotes());

// use chalk, install chalk v 2.4.1, load chalk, print 'success' in green

const chalk = require("chalk");
const log = console.log;
// log(chalk.green.inverse.bold("success"));

if (validator.isEmail("bob@bob.com")) {
  log(chalk.green.inverse.bold("success"));
} else {
  log(chalk.red.inverse.bold("invalid"));
}

console.log(process.argv[2]);
