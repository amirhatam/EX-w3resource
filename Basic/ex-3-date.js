// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const moment = require("moment")

const date = moment().format('MM/DD/YYYY');
// const date = moment().format('DD MM YYYY');

console.log("Today is", date);