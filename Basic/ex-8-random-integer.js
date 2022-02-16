/*  Write a JavaScript program where the program takes a random integer 
 between 1 to 10, the user is then prompted to input a guess number. 
 If the user input matches with guess number, the program will 
 display a message "Good Work" otherwise display a message "Not matched". */


const min = 1
const max = 10



const checkValue = (userNum) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log("random", random);
    if (userNum == random) {
        console.log("Good Work");

    } else {
        console.log("Not matched");
    }
}


checkValue(2)