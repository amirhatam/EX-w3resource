// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//First Solution with package moment
const moment = require("moment")

const dateMoment = moment().format('MM/DD/YYYY');
// const date = moment().format('DD MM YYYY');

// console.log("Today is", dateMoment);



//Second Solution with Date Methods
let today = new Date();
let dd = today.getDate()
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

if (dd < 10) {
    dd = `0${dd}`
}

if (mm < 10) {
    mm = `0${mm}`
}
today = `${dd}/${mm}/${yyyy}`
console.log("Today is", today);