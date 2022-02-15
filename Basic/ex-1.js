// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

//First Solution with package moment

const moment = require('moment')

moment.locale("fr");

const today = moment().format('dddd')
const time = moment().format('h:mm:ss a')



console.log("Today is :", today);
console.log("Current time is : ", time);

//Second Solution


