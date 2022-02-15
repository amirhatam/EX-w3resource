// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

//First Solution with package moment

const moment = require('moment')

moment.locale("fr");

const todayByMoment = moment().format('dddd')
const timeByMoment = moment().format('h:mm:ss a')



// console.log("Today is :", todayByMoment);
// console.log("Current time is : ", timeByMoment);



//Second Solution with Date Methods
const today = new Date()
const day = today.getDay()
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]

console.log(`Today is :${daylist[day]}`);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
// console.log(`Current time is ${hour}:${minute}:${second}`);

let prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);

