// const add = require("./utils.js");
// const sum = add(4, -2);
// console.log(sum);

// challenge, define and use a function in a new file, new file called notes.js, create getNotes function that returns "your notes...", export getNotes function, from app.js load in and call function printing message to console

const getNotes = require("./notes.js");
console.log(getNotes());
